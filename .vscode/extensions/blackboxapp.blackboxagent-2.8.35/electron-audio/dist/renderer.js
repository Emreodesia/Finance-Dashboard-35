"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const audioChatManager_1 = require("./audioChatManager");
window.addEventListener('DOMContentLoaded', async () => {
    const { sendCommand, sendDataToMain, receiveDataFromMain, getParams } = window.electronAPI;
    try {
        const userId = getParams('userId');
        console.log("UserId in Electron is", userId);
        const audioManager = new audioChatManager_1.AudioChatManager(userId, sendDataToMain);
        audioManager.initialize();
        receiveDataFromMain((args) => {
            console.log("From main ", args.type);
            //alert("From main");
            switch (args.type) {
                case 'audio-initialize': {
                    //audioManager.initialize();
                    break;
                }
                case 'audio-create-room': {
                    audioManager.audioCreateRoom(args.roomId);
                    break;
                }
                case 'audio-join-room': {
                    audioManager.audioJoinRoom(args.roomId);
                    break;
                }
                case 'audio-leave-room': {
                    audioManager.audioLeaveRoom(args.roomId);
                    break;
                }
                case 'audio-unmute': {
                    audioManager.audioToggleMute();
                    break;
                }
                case 'audio-mute': {
                    audioManager.audioToggleMute();
                    break;
                }
            }
        });
    }
    catch (err) {
        console.error('[RENDERER] Error Occured:', err);
        sendDataToMain({ type: 'error', error: err });
    }
});
