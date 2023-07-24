require("dotenv").config();

module.exports = {
    TOKEN: "MTA1OTQyNTE0OTE1NTI4Mjk2NA.GOJd6H.mpumrlx0ZXJht83eDMPQc63hdfRH55JTh2qdlQ",
    PREFIX: "!",
    OWNER_ID: "918415419411431455",
    mongodb: "mongodb+srv://kung:test12345@cluster0.1tnmfp9.mongodb.net/?retryWrites=true&w=majority",
    EMBED_COLOR: "#000001",
    SEARCH_ENGINE: "youtube", // default -- 'youtube' | 'soundcloud' | 'youtube_music'
    LEAVE_EMPTY: "120000",
    emoji: {
        ERROR: "❌",
        SUCCESS: "✅",
        disabled: "🔴",
        enabled: "🟢",
        cleared: "🧹",
        time: "⏲️",
        search: "🔎",
        ping: "🏓",
        bot: "🤖",
        pause_resume: "⏯️",
        skip: "⏭️",
        loop: "🔄",
        stop: "⏹️",
        autoplay: "♾",
      },
    NODES: [
     {
        name: 'node : 1',
        url: 'localhost:2333',
        auth: 'thisisveryhighpassword',
        secure: false
  }
    ]
}
