import * as vscode from "vscode";
export class UIUtil {
    static async getFolderName(): Promise<string | undefined> {
        return await vscode.window.showInputBox({
            prompt: "文件夹名称",
            placeHolder: "请输入文件夹名称",
            validateInput: (text) => {
                return text === "" ? "文件夹名称不能为空" : null;
            },
        });
    }
}
