window.PetRoom = {
  version: "Interaction UI V1",
  stats: { happiness: 80, fullness: 60, energy: 70, coins: 320 },
  actions: {
    food: {
      title: "吃饭时间",
      description: "今天想给奶糖吃什么？",
      options: [
        { icon: "🍮", label: "焦糖布丁" },
        { icon: "🥛", label: "暖牛奶" },
        { icon: "🥞", label: "松饼" }
      ]
    },
    play: {
      title: "一起玩耍",
      description: "选一个玩具陪奶糖玩吧。",
      options: [
        { icon: "🏐", label: "小皮球" },
        { icon: "🧸", label: "布偶" },
        { icon: "🫧", label: "泡泡" }
      ]
    },
    clean: {
      title: "洗香香",
      description: "清洁用品会在这里出现。",
      options: [
        { icon: "🧼", label: "香皂" },
        { icon: "🪮", label: "小梳子" },
        { icon: "🫧", label: "泡泡浴" }
      ]
    },
    sleep: {
      title: "晚安休息",
      description: "为奶糖准备舒服的睡眠。",
      options: [
        { icon: "🌙", label: "睡一会" },
        { icon: "🛏️", label: "睡到早上" },
        { icon: "📖", label: "睡前故事" }
      ]
    },
    dress: {
      title: "可爱换装",
      description: "服装系统将在这里继续扩展。",
      options: [
        { icon: "🎀", label: "头饰" },
        { icon: "👕", label: "上衣" },
        { icon: "🧢", label: "帽子" }
      ]
    }
  }
};
