// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { UIUtil } from "./util/uiUtil";
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export const activate = (context: vscode.ExtensionContext) => {
    console.log("c-code-temp is avtive !");
    // const createReactCompomentFolder =
    //     vscode.commands.registerTextEditorCommand(
    //         "c-code-temp.createReactCompomentFolder",
    //         async (context) => {
    //             const folderName = await UIUtil.getFolderName();
    //             console.log(context);
    //             console.log(context.selection);
    //         }
    //     );
    // context.subscriptions.push(...[createReactCompomentFolder]);
};

// this method is called when your extension is deactivated
export const deactivate = () => {};