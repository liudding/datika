type TucaoData = {
    openid: string;
    nickname: string;
    avatar?: string;
}

const PRODUCT_ID = '311244';

export default class Tucao {
    static url() {
        return "https://support.qq.com/product/" + PRODUCT_ID;
    }
    static request(data: any) {
        const form = document.createElement("form");
        form.id = "tucao-form";
        form.name = "tucao-form";
        form.hidden = true;
        form.method = "POST";
        form.action = Tucao.url();

        document.body.appendChild(form);

        // 设置相应参数 
        for (const key in data) {
            const input = document.createElement("input");
            input.type = "text";
            input.name = key;
            input.value = data[key];
            form.appendChild(input);
        }

        form.submit();

        document.body.removeChild(form);
    }

    static loadInto(document: Document, data: TucaoData) {
        const div = document.createElement("div");

        div.innerHTML = `
            <form id="form" method="post" action="${Tucao.url()}">
                <input type="hidden" name="openid" value="${data.openid}">
                <input type="hidden" name="nickname" value="${data.nickname}">
                <input type="hidden" name="avatar" value="${data.avatar}">
            </form>`;

        document?.body.append(div);

        const scriptElement = document.createElement("script");
        scriptElement.innerHTML = `
          document.getElementById("form").submit()
        `;
        scriptElement.type = "text/javascript";

        document?.body.append(scriptElement);
    }
}
