SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_DIR=$SCRIPT_DIR/..

OUTPUT_DIR=$SCRIPT_DIR/output
OUTPUT_WEB_DIR=$OUTPUT_DIR/web

# 下载 jq
# https://stedolan.github.io/jq/download/

# 从 package.json 读取版本号
VERSION="$(cat $PROJECT_DIR/package.json | $SCRIPT_DIR/jq ' .version ' -j)"

# 询问版本
# * 修复 * 特性 * 大版本


# build frontend
cd $SCRIPT_DIR/.. && ionic build
rm -rf $OUTPUT_WEB_DIR
cp -r $SCRIPT_DIR/../dist $OUTPUT_WEB_DIR


# # zip
PACKAGE_FILE=$VERSION.zip

cd $OUTPUT_WEB_DIR
zip -qr $PACKAGE_FILE * -x "*.map" -x "*.gz" -x "img/icons/*"
mv $PACKAGE_FILE ../

# make version json file
VERSION_TEMPLATE="{ \"version\": \"${VERSION}\", \"type\": \"web\", \"downloadUrl\": \"https://youcce-packages.oss-cn-shanghai.aliyuncs.com/web/${PACKAGE_FILE}\", \"label\": \"${VERSION}\", \"description\": \"\", \"nativeVersions\": \"^1.0.0\" }, 
    "
# 写入新的版本号 到 versions.json
sed -i -e "1a\\
    ${VERSION_TEMPLATE}" $SCRIPT_DIR/versions.json


# doc: https://help.aliyun.com/document_detail/50452.html
function ossupload() {
    SRC=$1;
    DEST=$2;

    OSSUTIL=./ossutilmac64

    if [ ! -e "$OSSUTIL" ]; then
        echo "$FILE does not exist";

        curl -o ossutilmac64 http://gosspublic.alicdn.com/ossutil/1.7.1/ossutilmac64 && chmod 755 ossutilmac64
    fi

    ./ossutilmac64 cp $SRC $DEST -fu -c $SCRIPT_DIR/.ossutilconfig
}

function osscopy() {
    SRC=$1
    DEST=$2

    $SCRIPT_DIR/ossutilmac64 cp $SRC $DEST -fu -c $SCRIPT_DIR/.ossutilconfig
}


BUCKET=youcce-packages

function release_web() {
  
    PACKAGE_DEST_PATH=oss://$BUCKET/web/$PACKAGE_FILE
    VERSION_DEST_PATH=oss://$BUCKET/versions.json

    # 上次安装包
    ossupload $OUTPUT_DIR/$PACKAGE_FILE $PACKAGE_DEST_PATH;

    # 更新 versions 文件
    ossupload $SCRIPT_DIR/versions.json $VERSION_DEST_PATH
}

function release_android() {
    PACKAGE_FILE=$1

    PACKAGE_DEST_PATH=oss://$BUCKET/android/releases/$PACKAGE_FILE

    CURRENT_PACKAGE_PATH=oss://$BUCKET/android/$PACKAGE_FILE

    ossupload ./versions.json $VERSION_DEST_PATH

    osscopy $PACKAGE_DEST_PATH $CURRENT_PACKAGE_PATH
}


release_web