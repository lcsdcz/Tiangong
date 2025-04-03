/**
 * 天宫空间站虚拟漫游 - 数据结构文件
 * 包含所有舱段、全景图和热点信息
 */

// 漫游数据结构
// 这个对象包含了整个虚拟漫游系统的所有数据
// 按照空间站的不同舱段进行组织，每个舱段包含多个全景图，每个全景图包含多个热点
const tourData = {
    // 天和核心舱数据
    // 包含核心舱的基本信息和三个全景场景：总览、工作区和生活区
    tianhe: {
        name: "天和核心舱", // 舱段名称
        description: "中国空间站的管理与控制中心，为航天员提供生活区域和工作平台。", // 舱段描述
        panoramas: [ // 全景图数组，包含该舱段的所有全景场景
            {
                id: "tianhe-overview", // 全景图唯一标识符
                name: "核心舱总览", // 全景图名称
                image: "images/panoramas/tianhe-overview.jpeg", // 全景图片路径
                description: "天和核心舱全景视图，全长16.6米，重约22.5吨，由节点舱、小柱段、大柱段、后端通道及资源舱组成。", // 全景图描述
                hotspots: [ // 热点数组，定义全景图中的交互点
                    {
                        x: 10, // 热点在全景图中的水平位置（百分比）
                        y: 45, // 热点在全景图中的垂直位置（百分比）
                        title: "资源舱", // 热点标题
                        content: "为环形柱段，位于大柱段外侧，主要安装有各种生命维持系统，负责空间站的环境控制与生命保障。" // 热点详细内容
                    },
                    {
                        x: 15,
                        y: 45,
                        title: "大柱段",
                        content: "直径4.2米，是航天员的主要工作区，装有4个机柜，配备各种科学实验设备和控制系统。"
                    },
                    {
                        x: 40,
                        y: 40,
                        title: "小柱段",
                        content: "直径约2.8米，内侧是居住区，有3个卧室和1个卫生间，外侧是太阳能帆板、中继天线、机械臂、控制力矩陀螺等大尺寸舱外设备。"
                    },
                    {
                        x: 85,
                        y: 40,
                        title: "节点舱",
                        content: "核心舱的主要对接模块，有2个对接口、2个停泊口和1个出舱口，兼作气闸舱。可使核心舱与其他四个方向访问空间站的飞船对接，包括两个实验舱（问天舱和梦天舱）、一艘货运飞船和一艘载人飞船。"
                    }
                ]
            },
            {
                id: "tianhe-work", // 工作区全景图
                name: "工作区",
                image: "images/panoramas/tianhe-work.jpeg",
                description: "天和核心舱的工作区域，位于大柱段内，配备了先进的控制系统和科研设备。",

            },
            {
                id: "tianhe-living", // 生活区全景图
                name: "生活区",
                image: "images/panoramas/tianhe-living.png",
                description: "位于小柱段内侧的生活区，包括3个卧室、1个卫生间和航天员日常活动区域。",
                hotspots: [
                    {
                        x: 30,
                        y: 40,
                        title: "航天员卧室",
                        content: "航天员的私人睡眠空间，小柱段内共有3个独立卧室，每个航天员都有独立的睡眠舱，配备睡袋、个人物品存放处和小型娱乐设备，提供必要的隐私和休息环境。"
                    },
                    {
                        x: 50,
                        y: 55,
                        title: "健身设备",
                        content: "为抵抗微重力环境对人体的负面影响，空间站配备了专业健身设备，如跑步机和阻力训练器，航天员每天都要进行规定的锻炼计划。"
                    },
                    {
                        x: 80,
                        y: 60,
                        title: "卫生间",
                        content: "航天员进行个人清洁的区域，包括特殊设计的太空淋浴系统、牙刷站和太空厕所，所有设备都经过专门设计，适合微重力环境使用，确保航天员保持良好的卫生条件。"
                    },
                ]
            }
        ]
    },
    
    // 问天实验舱数据
    // 包含问天实验舱的基本信息和三个全景场景：总览、生物实验区和材料实验区
    wentian: {
        name: "问天实验舱", // 舱段名称
        description: "轴向长度17.9米的大型实验舱，配备生活设施、小机械臂和出舱气闸舱，可作为组合体控制备份。", // 舱段描述
        panoramas: [ // 全景图数组
            {
                id: "wentian-overview", // 实验舱总览全景图
                name: "实验舱总览",
                image: "images/panoramas/wentian-overview.jpg",
                description: "问天实验舱的全景视图，展示了工作舱、气闸舱和资源舱三部分结构，轴向全长17.9米，最大直径4.2米。",
                hotspots: [
                    {
                        x: 25,
                        y: 50,
                        title: "工作舱",
                        content: "问天实验舱的主要工作区域，配备有航天员生活设施，可支持6名航天员的生活需求。具备组合体控制备份功能，当天和核心舱出现故障时可接管控制。"
                    },
                    {
                        x: 50,
                        y: 50,
                        title: "气闸舱",
                        content: "问天实验舱的出舱通道，作为航天员主用的出舱活动气闸舱。航天员通过此区域进行舱外活动，完成各种太空任务。"
                    },
                    {
                        x: 80,
                        y: 50,
                        title: "资源舱",
                        content: "问天实验舱的资源舱部分，外部布设有舱外实验平台，用于安装舱外实验载荷，研究空间环境对各类材料和生物样本的影响。"
                    }
                ]
            },
            {
                id: "wentian-biology", // 生物实验区全景图
                name: "生物实验区",
                image: "images/panoramas/wentian-biology.jpg",
                description: "问天实验舱中的生物实验区，进行植物培养和微生物研究。配置了生命生态、生物技术和变重力科学等实验柜，能够支持开展多种类植物、动物、微生物等在空间条件下的生长、发育、遗传、衰老等响应机理研究，以及密闭生态系统的实验研究，并通过可见光、荧光、显微成像等多种在线检测手段，支持分子、细胞、组织、器官等多层次生物实验研究，还能提供0.01g~2g的变重力模拟，支持开展不同重力条件下生物体生长机理的对比研究。",
            },
            {
                id: "wentian-materials", // 材料实验区全景图
                name: "出舱气闸舱",
                image: "images/panoramas/wentian-materials.jpg",
                description: "问天实验舱的出舱气闸舱，作为航天员主用的出舱活动通道。问天舱气闸舱比天和核心舱上的节点舱空间更大，两者的另一个区别则是节点舱的出口在天顶方向，问天舱的出口则位于天底，后者相对而言能减少出舱时太阳光照的影响。",

            }
        ]
    },
    
    // 梦天实验舱数据
    mengtian: {
        name: "梦天实验舱", // 舱段名称
        description: "专注于微重力环境下的高端科学实验，配备有舱外机械臂和操作平台，为空间站提供80%的能量。", // 舱段描述
        panoramas: [ // 全景图数组
            {
                id: "mengtian-overview", // 实验舱总览全景图
                name: "实验舱总览",
                image: "images/panoramas/mengtian-overview.jpg",
                description: "梦天实验舱由工作舱、载荷舱、货物气闸舱和资源舱组成，为航天员提供超过32立方米的工作与活动空间。",
                hotspots: [
                    {
                        x: 30,
                        y: 40,
                        title: "工作舱",
                        content: "梦天实验舱的主要工作区域，配备了各类科研设备和操作台，是航天员进行日常科学实验和操作的主要场所。"
                    },
                    {
                        x: 55,
                        y: 40,
                        title: "载荷舱",
                        content: "用于安装各类科学实验设备的专用区域，配置了流体物理、材料科学等多学科方向的实验柜，支持开展微重力环境下的前沿科学研究。"
                    },
                    {
                        x: 60,
                        y: 40,
                        title: "货物气闸舱",
                        content: "用于空间站物资转运和舱内外物品交换的区域，可接收来自货运飞船的补给物资，并进行分类整理后分发到各个舱段。"
                    },
                    {
                        x: 75,
                        y: 40,
                        title: "资源舱",
                        content: "负责梦天实验舱能源管理和资源储存的区域，连接太阳能电池板，储存和分配电能，确保所有实验设备和生命支持系统的正常运行。"
                    }
                ]
            },
            {
                id: "mengtian-airlock", // 货物气闸舱全景图
                name: "货物气闸舱",
                image: "images/panoramas/mengtian-airlock.jpeg",
                description: "梦天实验舱的货物气闸舱，用于舱内外物品转移，是舱段构成的重要部分。",

            },
            {
                id: "mengtian-research", // 科研工作区全景图
                name: "科研工作区",
                image: "images/panoramas/mengtian-research.png",
                description: "梦天实验舱的主要科研工作区，配备了流体物理、材料科学等多学科方向的实验柜。",
            }
        ]
    },
    
    // 神舟飞船数据
    // 包含神舟飞船的基本信息和三个全景场景：总览、返回舱内部和对接机构
    shenzhou: {
        name: "神舟飞船", // 舱段名称
        description: "航天员往返空间站的主要交通工具，具备对接、应急返回等功能。", // 舱段描述
        panoramas: [ // 全景图数组
            {
                id: "shenzhou-overview", // 飞船总览全景图
                name: "神舟飞船总览",
                image: "images/panoramas/shenzhou-overview.png",
                description: "神舟载人飞船的内部全景视图，展示了返回舱和轨道舱。",
                hotspots: [
                    {
                        x: 55,
                        y: 40,
                        title: "返回舱",
                        content: "飞船的核心部分，也是航天员返回地球时使用的舱段，配备了生命支持系统、控制系统和减速降落装置，确保航天员安全返回地球。"
                    },
                    {
                        x: 30,
                        y: 40,
                        title: "轨道舱",
                        content: "航天员在轨期间的主要活动区域，也是进行简单科学实验的场所，配备了生活设施和实验设备，可与空间站对接后作为航天员的额外活动空间。"
                    },
                    {
                        x: 75,
                        y: 35,
                        title: "推进舱",
                        content: "飞船的动力系统部分，包含主发动机和姿态控制发动机，负责轨道机动、对接操作和返回地球前的制动，是飞船航行的动力来源。"
                    }
                ]
            },
            {
                id: "shenzhou-return", // 返回舱内部全景图
                name: "返回舱内部",
                image: "images/panoramas/shenzhou-return.jpg",
                description: "神舟飞船返回舱的内部视图，展示了航天员座椅和控制面板。（为模型图）",
            },
            {
                id: "shenzhou-docking", // 对接机构全景图
                name: "返回舱外部",
                image: "images/panoramas/shenzhou-docking.jpeg",
                description: "神舟十三号飞船着陆图像。返回舱配备了热防护系统，使用特殊的热防护材料来抵御再入时产生的高温。舱体表面的热防护层会在高温下发生烧蚀，从而降低热量的传递，同时通过气囊和降落伞系统保证安全着陆。",

            }
        ]
    },
    tianzhou: {
        name: "天舟货运飞船", // 舱段名称
        description: "天舟货运飞船负责将物资、设备以及补给送往中国空间站，支持航天员的长期工作和生活。", // 舱段描述
        panoramas: [ // 全景图数组
            {
                id: "tianzhou-overview", // 天舟货运飞船总览全景图
                name: "天舟货运飞船总览",
                image: "images/panoramas/tianzhou-overview.jpg",
                description: "天舟货运飞船的内部全景视图，展示了货舱、对接舱和能源系统。",
                hotspots: [
                    {
                        x: 52,
                        y: 40,
                        title: "货舱",
                        content: "货舱用于运输和存储物资，包括食物、设备、实验材料等，确保空间站的正常运行。",
                    },
                    {
                        x: 22,
                        y: 32,
                        title: "对接舱",
                        content: "天舟货运飞船的对接舱与空间站对接，确保物资运输过程中安全可靠。",
                    },
                    {
                        x: 80,
                        y: 50,
                        title: "推进舱",
                        content: "推进舱负责控制飞船的轨道调整和机动，确保顺利对接与离开空间站。",
                    }
                ]
            },
            {
                id: "tianzhou-cargo", // 货舱内部全景图
                name: "货舱内部",
                image: "images/panoramas/tianzhou-cargo.jpeg",
                description: "天舟货运飞船货舱的内部视图，展示了货物存放区域与装卸通道。",
                hotspots: [
                    {
                        x: 40,
                        y: 45,
                        title: "物资存储区",
                        content: "这里存放着各种用于补给空间站的物资，包括食品、医疗用品、实验设备等。",
                    },
                    {
                        x: 55,
                        y: 30,
                        title: "装卸通道",
                        content: "装卸通道用于将货物转移到空间站或飞船外部，确保运输过程的顺畅与安全。",
                    },
                    {
                        x: 25,
                        y: 70,
                        title: "货物固定系统",
                        content: "货物固定系统确保在飞行过程中货物的稳定，防止物资在运输过程中出现移位。",
                    }
                ]
            },
        ]
    }
    
};      


// 数据结构说明：
// 1. tourData是主对象，包含四个子对象，分别对应四个舱段
// 2. 每个舱段对象包含name(名称)、description(描述)和panoramas(全景图数组)
// 3. 每个全景图对象包含id(唯一标识)、name(名称)、image(图片路径)、description(描述)和hotspots(热点数组)
// 4. 每个热点对象包含x/y(位置坐标)、title(标题)和content(详细内容)

// 导出数据以供其他模块使用
// 在实际项目中，可能会使用ES6模块导出
// export default tourData;