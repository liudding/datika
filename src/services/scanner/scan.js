/* eslint-disable*/


function loadSdk() {
  const head = document.getElementsByTagName('HEAD').item(0)
  const scriptElement = document.createElement('script')
  scriptElement.type = 'text/javascript'
  // scriptElement.src = './static/gradecam/sdk/gcsdk_noui.js'
  scriptElement.src = './static/gradecam/sdk/gcsdk_noui_6.5.1.3.js'

  head.appendChild(scriptElement)
}


function cacheCallbacks(callbacks) {
  delete callbacks.initCallback // 删除初始化回调，避免在 resume 时 initCallback 被调用
  window.gradecam.eventHandlers = callbacks
}

/**
 *
 *
 * @param {*} {
 *   scanCallback,
 *   scanIssueCallback,
 *   validateCallback
 * }
 */
function bindEvents({ scanCallback, scanIssueCallback, validateCallback }) {
  window.gradecam.bind('scan', scanCallback)

  /**
   * “examLength” - 题目数量不正确。gradeCam.setMode()
   * “duplicateId” - 当前扫描的答题卡和前一个重复，并忽略
   * “badStructure” - 可能由于光线、答题卡不清晰等原因导致。也有可能因为答题卡所在的 Region 与扫描时所使用的 Region不一致。window._GCREGION
   * “networkError” - 网略问题
   */
  window.gradecam.bind('scanIssue', scanIssueCallback)

  window.gradecam.setValidateCallback(validateCallback)

  // 无需缓存 initCallback 和 pluginLoadCallback，因为这两个回调之后在 init 时被调用一次。
  cacheCallbacks({
    scanCallback,
    scanIssueCallback,
    validateCallback
  })
}

function unbindEvents() {
  window.gradecam.unbind('pluginLoad')
  window.gradecam.unbind('scan')
  window.gradecam.unbind('scanIssue')
  window.gradecam.setValidateCallback(function() {})
}

function start() {
  window.gradecam.startCamera()
}
function stop() {
  unbindEvents()
  window.gradecam.stopCamera()
}



function getCameraList() {
  return window.gradecam.getCameraList()
}

/**
 * 切换相机。
 * @param {string} camera getCameraList 获取到的 相机名称。null: 则顺序切换到下一个相机
 */
function switchCamera(camera = null) {
  window.gradecam.stopCamera()

  if (!camera) {
    const cameraList = getCameraList()
    const index = cameraList.indexOf(window.gradecam.getOption('selected_camera'))

    let nextCameraIndex = index + 1

    nextCameraIndex =
      nextCameraIndex > cameraList.length - 1 ? 0 : nextCameraIndex

    camera = cameraList[nextCameraIndex]
  }

  window.gradecam.setOptions({
    selected_camera: camera
  })
  window.gradecam.startCamera()
}

function findDefaultCamera() {
  const cameraList = getCameraList()
  if (!cameraList || cameraList.length === 0) {
    return null
  }

  for (const camera of cameraList) {
    if (camera.toLowerCase().indexOf('back') >= 0) {
      return camera
    }
  }

  // 安卓机器，则启动第二个相机。经小范围测试，安卓机会默认打开前置相机
  if (/(Android)/i.test(window.navigator.userAgent.toLowerCase())) {
    return cameraList.length > 1 && cameraList[1]
  }

  return cameraList[0]
}

/**
 * 设置启动时的默认相机（前置相机 / 后置相机）
 */
function setDefaultCamera() {
  window.gradecam.setOptions({
    high_res: true,
    selected_camera: findDefaultCamera()
  })
}



function loaded() {
  return window.gradecam
}

/**
 * 是否在 native 扫描页面
 */
function inGradeCamWebview() {
  return window.gcmobilesdk
}


/**
 * 是否支持 GradeCam
 * 由于 GradeCam 需要使用 userMedia，所以这里使用 userMedia 来判断
 */
function isSupported() {
  if (inGradeCamWebview()) {
    return true
  }
  return navigator.mediaDevices
}

function renderCamera(container) {
  container.appendChild(window.gradecam.getElement())
  window.document.querySelector('#gcplugin0').style.backgroundImage = ''
}

/**
 *
 * @param {function} initCallback  回调参数 true / false
 * @param {function} pluginLoadCallback plugin 加载成功的回调
 */
function bindLoad(initCallback, pluginLoadCallback) {
  let initDone = false
  window.setTimeout(() => {
    if (!initDone) {
      initCallback && initCallback(false)
    }
  }, 10000)

  window.gradecam.bind('pluginLoad', () => {
    // 此时 GradeCam 的 plugin 已经加载完成，才能 getCameraList
    setDefaultCamera()

    pluginLoadCallback && pluginLoadCallback()
    initDone = true
    initCallback && initCallback(true)
  })
}

/**
 * 初始化扫描
 * @param {*} params 配置项
 * @param {*} callbacks 回调函数
 */
function init({ cameraContainer, examLength, autoLength = true, bridge = false }, callbacks) {
  window.gradeCamOnAPILoad = () => {
    window.gradecam.setMode({
      scan_mode: 'exam',
      exam_length: examLength,
      auto_length: autoLength,
      output_version: 1 // 所有 output_version 中，题目的 label 都不会被输出
    })

    window.gradecam.setShowMessages(false)

    bindLoad(callbacks.initCallback, callbacks.pluginLoadCallback)
    bindEvents(callbacks)

    renderCamera(cameraContainer)
  }

  if (!window.gradecam) {
    loadSdk()
  } else {
    const initCallback = callbacks.initCallback

    stop() // 防止离开(SPA)页面时，未调用 stop()

    bindEvents(callbacks)

    renderCamera(cameraContainer)

    setDefaultCamera() // 此时 GradeCam 的 plugin 已经加载完成。所以，可以在这里直接操作。

    initCallback && initCallback(true)

    start()
  }
}



// ！！！ IMPORTANT 各区服务器不互通
window._GCREGION = 'asia'

/**
 * 在离开扫描页面之时，必须执行 stop() 来停止 gradecam 的 camera。否则，再次进入扫描页面，则可能会 camera 不动
 * 如果是刷新页面，则可忽略上面👆
 */

/** GradeCam 不能**连续**扫描同一张答题卡 */

/** 如果连续多次出现 Block inconsistency 错误，则可能是未绑定事件。比如：pause() 之后，未 resume() */

/**
 * IMPORTANT !!!
 * 在 iOS native 中，必须设置一段延时之后 init (或者 renderCamera ).
 * 否则会报错 “Could not instantiate GradeCam Reader: Not supported on this system”.
 *
 * 延迟的时间不确定。如果太短也会报错
 */

export default {
  init,

  getCameraList,
  switchCamera,

  pause() {
    unbindEvents()
  },
  resume() {
    bindEvents(window.gradecam.eventHandlers)
  },
  start,
  stop,

  loaded,
  isSupported,
  inGradeCamWebview
}
