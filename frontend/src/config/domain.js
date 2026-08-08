/* Copyright 2026 上海如静知华信息科技有限公司 */
export const domain={
  "code": "Service Agent",
  "systemName": "企业客户服务智能体平台",
  "englishName": "CUSTOMER SERVICE AGENT",
  "theme": {
    "primary": "#365f72",
    "dark": "#18313d",
    "accent": "#d07a4f"
  },
  "workspace": "客户服务中心 / 全渠道运营",
  "fieldWorkspace": "坐席协同台 · 华东服务中心",
  "period": "2026-08-08 · 今日服务班次",
  "liveText": "服务政策于 10:34 完成同步",
  "fieldContextLabel": "服务渠道",
  "fieldContext": "在线客服 · 电话 · 企业微信",
  "fieldUser": "林妍",
  "fieldRole": "客户服务专员",
  "adminUser": "顾言",
  "adminRole": "客户服务负责人",
  "adminTitle": "服务智能体运营中心",
  "adminBreadcrumb": "客户服务 / 智能协同",
  "adminSubtitle": "统一客户诉求、服务政策、回复草案和人工接管，涉及退款、赔付与隐私的事项保留主管确认。",
  "exportAction": "导出服务日报",
  "createAction": "创建服务任务",
  "chartTitle": "首次响应达标率",
  "chartSubtitle": "各渠道响应与解决时效",
  "chartLabels": [
    "周一",
    "周二",
    "周三",
    "周四",
    "周五",
    "周六",
    "周日",
    "下周一",
    "下周二"
  ],
  "loadTitle": "服务知识就绪度",
  "loadSubtitle": "产品政策、服务流程与客户授权",
  "recordsTitle": "全渠道客户服务队列",
  "recordsSubtitle": "按情绪风险、服务等级与等待时长排序",
  "issueTitle": "隐私与赔付提醒",
  "issueSubtitle": "退款、赔付、隐私和高情绪风险转人工处理",
  "recordName": "服务工单",
  "itemName": "客户 / 诉求",
  "unitName": "服务团队",
  "batchName": "处理阶段",
  "planName": "计划步骤",
  "doneName": "已完成",
  "exceptionName": "服务风险",
  "unitLabel": "项",
  "listBreadcrumb": "客户服务 / 工单队列",
  "listSubtitle": "统一管理诉求识别、知识检索、回复草拟、人工接管、回访和服务质量评测。",
  "listSummary": [
    [
      "在途分析",
      "47"
    ],
    [
      "本周交付",
      "32"
    ],
    [
      "业务待确认",
      "9"
    ],
    [
      "敏感待审",
      "6",
      true
    ]
  ],
  "tabs": [
    "全部",
    "理解中",
    "工单检索中",
    "待确认",
    "已交付"
  ],
  "fieldBreadcrumb": "分析工作台 / 我的任务",
  "fieldTitle": "客户服务专员协同工作台",
  "fieldSubtitle": "12 个待处理 · 3 项高风险 · 服务经理林妍",
  "fieldSecondary": "查看服务指标地图",
  "reportAction": "确认分析结论",
  "fieldNoticeTitle": "智能体已匹配已服务指标和只读客户资料集",
  "fieldNotice": "禁止执行写操作；敏感字段、外发报告与关键结论必须确认",
  "steps": [
    "问题澄清",
    "服务指标匹配",
    "受控工单处理",
    "结论解释",
    "人工确认"
  ],
  "documentAction": "打开分析底稿",
  "printAction": "查看客户资料服务链路",
  "resourceCardTitle": "服务指标覆盖",
  "resourceValueLabel": "可用服务指标",
  "resourceHealthLabel": "客户资料可信度",
  "quickSubtitle": "客户服务专员常用协同入口",
  "quickActions": [
    [
      "自然语言分析",
      "/shopfloor/report",
      "问题、范围与服务标准"
    ],
    [
      "服务指标目录",
      "/shopfloor/material",
      "定义、负责人和版本"
    ],
    [
      "客户资料服务链路",
      "/shopfloor/resources",
      "来源、转换与质量"
    ],
    [
      "风险升级",
      "/shopfloor/andon",
      "敏感、越权与低置信度"
    ]
  ],
  "reportDefaults": [
    1,
    0
  ],
  "reportTitle": "确认服务智能体分析结论",
  "reportSubtitle": "记录问题服务标准、客户资料范围、关键发现、限制条件和业务行动。",
  "reportSuccess": "分析结论已进入客户洞察目录",
  "reportPlaceholder": "填写业务问题、服务指标服务标准、结论限制、行动建议或修正意见",
  "reportFootnote": "智能体只执行只读分析，不得修改生产客户资料或绕过客户资料权限",
  "ruleTitle": "服务智能体工单检索策略",
  "ruleSubtitle": "DATA-QUERY-GUARD · V1.0",
  "rules": [
    [
      "工单检索方式",
      "只读"
    ],
    [
      "服务指标服务标准",
      "认证优先"
    ],
    [
      "敏感字段",
      "自动脱敏"
    ],
    [
      "报告外发",
      "人工确认",
      true
    ]
  ],
  "fieldTotals": [
    [
      "5",
      "重点问题"
    ],
    [
      "3",
      "今日报告"
    ],
    [
      "96%",
      "服务指标匹配"
    ],
    [
      "7",
      "分析建议"
    ]
  ],
  "adminMenus": [
    [
      "/admin",
      "home",
      "分析驾驶舱"
    ],
    [
      "/admin/work-orders",
      "order",
      "分析队列"
    ],
    [
      "/admin/samples",
      "box",
      "服务指标目录"
    ],
    [
      "/admin/schedule",
      "calendar",
      "报告日历"
    ],
    [
      "/admin/methods",
      "process",
      "分析模板"
    ],
    [
      "/admin/reviews",
      "quality",
      "结论评测"
    ],
    [
      "/admin/resources",
      "machine",
      "客户资料与权限"
    ],
    [
      "/admin/report",
      "chart",
      "服务分析"
    ]
  ],
  "fieldMenus": [
    [
      "/shopfloor",
      "home",
      "我的工作台"
    ],
    [
      "/shopfloor/report",
      "report",
      "结论确认"
    ],
    [
      "/shopfloor/tasks",
      "order",
      "服务工单"
    ],
    [
      "/shopfloor/material",
      "box",
      "服务指标目录"
    ],
    [
      "/shopfloor/resources",
      "machine",
      "客户资料服务链路"
    ],
    [
      "/shopfloor/andon",
      "risk",
      "风险升级",
      6
    ]
  ],
  "moduleTitles": {
    "tasks": [
      "服务工单",
      "跟踪问题、服务标准、工单检索、结论与交付"
    ],
    "material": [
      "服务指标目录",
      "查看服务指标的定义、负责人和版本"
    ],
    "resources": [
      "客户资料服务链路",
      "了解客户资料来源、加工逻辑、质量和刷新状态"
    ],
    "andon": [
      "客户资料风险升级",
      "上报敏感、越权、服务标准冲突和低置信度结果"
    ],
    "samples": [
      "服务指标目录",
      "统一维护客户服务指标与客户资料产品"
    ],
    "schedule": [
      "报告日历",
      "管理周期报告、订阅与交付时点"
    ],
    "methods": [
      "分析模板",
      "沉淀问题框架、工单规则 模板和解释规范"
    ],
    "reviews": [
      "结论评测",
      "评估工单检索正确、服务标准一致和解释可靠"
    ],
    "report": [
      "服务分析",
      "分析请求量、交付效率与业务采纳"
    ]
  },
  "tagline": "让每一次客户回复有依据、有温度、有责任人",
  "storyTitle": "先理解诉求，<br/>再组织回复。",
  "storyText": "智能体负责检索、工单检索和形成分析草稿；客户资料团队负责验证与发布。",
  "pattern": [
    2,
    4,
    7,
    9,
    12,
    16,
    19,
    21,
    25,
    28,
    31,
    34
  ],
  "loginStats": [
    [
      "47",
      "在途分析"
    ],
    [
      "96%",
      "服务指标匹配"
    ],
    [
      "6",
      "敏感待审"
    ]
  ],
  "loginTitle": "客户服务智能体平台",
  "adminDemo": "服务指标 / 工单检索 / 评测",
  "fieldDemo": "问题 / 服务标准 / 结论"
}
export const records=[
  {
    "no": "SVC-260808-018",
    "name": "企业客户交付延期投诉",
    "code": "TICKET-DELIVERY",
    "unit": "服务运营组",
    "group": "客户服务中心",
    "plan": 10,
    "done": 6,
    "exception": 2,
    "due": "11:50",
    "batch": "结论解释",
    "status": "待审核",
    "progress": 60,
    "priority": "关注"
  },
  {
    "no": "SVC-260808-012",
    "name": "账号访问异常批量咨询",
    "code": "TICKET-ACCESS",
    "unit": "服务质量组",
    "group": "客户服务中心",
    "plan": 8,
    "done": 8,
    "exception": 0,
    "due": "10:10",
    "batch": "报告发布",
    "status": "已完成",
    "progress": 100,
    "priority": "正常"
  },
  {
    "no": "SVC-260808-021",
    "name": "订阅退款与赔付申请",
    "code": "TICKET-REFUND",
    "unit": "客户成功组",
    "group": "运营中心",
    "plan": 9,
    "done": 4,
    "exception": 1,
    "due": "14:20",
    "batch": "受控工单处理",
    "status": "进行中",
    "progress": 44,
    "priority": "正常"
  },
  {
    "no": "SVC-260808-027",
    "name": "重点客户数据导出请求",
    "code": "TICKET-PRIVACY",
    "unit": "服务运营组",
    "group": "客户服务中心",
    "plan": 11,
    "done": 3,
    "exception": 4,
    "due": "16:10",
    "batch": "权限审核",
    "status": "风险跟进",
    "progress": 27,
    "priority": "加急"
  }
]
export const resources=[
  {
    "code": "SVC-KB-01",
    "name": "服务政策知识库",
    "unit": "服务质量组",
    "status": "运行中",
    "health": 97,
    "value": "286",
    "valueUnit": "个",
    "note": "服务指标定义与负责人均已登记"
  },
  {
    "code": "SVC-CRM-02",
    "name": "客户信息授权视图",
    "unit": "服务知识组",
    "status": "运行中",
    "health": 94,
    "value": "42",
    "valueUnit": "个",
    "note": "10:30 完成客户资料新鲜度检查"
  },
  {
    "code": "SVC-GUARD-03",
    "name": "隐私与赔付审查器",
    "unit": "服务风控组",
    "status": "复核",
    "health": 79,
    "value": "6",
    "valueUnit": "项",
    "note": "6 个敏感工单检索等待确认"
  }
]
export const reviews=[
  {
    "no": "REV-SVC-028",
    "title": "交付延期投诉回复复核",
    "type": "责任表述",
    "detail": "18 个切片 · 顾言",
    "result": "待确认"
  },
  {
    "no": "REV-SVC-017",
    "title": "今日服务班次服务标准一致性核验",
    "type": "服务指标准确性",
    "detail": "32 个服务指标 · 林妍",
    "result": "通过"
  },
  {
    "no": "REV-SVC-039",
    "title": "退款赔付流程复核",
    "type": "客户资料合规",
    "detail": "发现 4 个敏感字段",
    "result": "异常"
  }
]
export const adminMetrics=[
  [
    "今日新进工单",
    "186",
    "较昨日同时段增加 12%",
    "blue"
  ],
  [
    "首次响应达标率",
    "94.2%",
    "平均响应 3 分 18 秒",
    "green"
  ],
  [
    "建议回复采纳率",
    "83.6%",
    "人工修订 21 条",
    "orange"
  ],
  [
    "高风险待接管",
    "8",
    "3 项涉及退款赔付",
    "red"
  ]
]
export const fieldMetrics=[
  [
    "我的待办工单",
    "12",
    "首项 SLA 还剩 18 分钟",
    "blue"
  ],
  [
    "知识命中率",
    "91%",
    "引用 5 条现行服务政策",
    "green"
  ],
  [
    "回复待确认",
    "7",
    "2 项触发情绪升级",
    "orange"
  ],
  [
    "知识库状态",
    "良好",
    "今日新增 6 条政策",
    "slate"
  ]
]
export const chartActual=[
  68,
  72,
  75,
  79,
  81,
  84,
  88,
  90,
  92
]
export const chartTarget=[
  72,
  75,
  78,
  81,
  84,
  87,
  90,
  92,
  94
]
export const loads=[
  [
    "产品使用知识",
    97,
    "216 条有效知识 · 今日更新 4 条"
  ],
  [
    "订单履约政策",
    94,
    "86 条规则 · 2 条即将失效"
  ],
  [
    "退款与赔付政策",
    89,
    "32 条规则 · 2 项待法务确认"
  ],
  [
    "客户隐私与授权",
    74,
    "敏感数据 · 6 项待审批"
  ]
]
export const issues=[
  {
    "type": "服务标准",
    "title": "客户要求退还实施服务费并升级投诉",
    "detail": "赔付金额超出坐席权限，需服务主管接管",
    "status": "待确认"
  },
  {
    "type": "权限",
    "title": "工单附件包含客户手机号与收货地址",
    "detail": "回复草案已自动遮蔽个人信息，等待隐私复核",
    "status": "复核中"
  },
  {
    "type": "解释",
    "title": "设备离线原因缺少现场网络诊断记录",
    "detail": "当前证据不足，已请求一线补充日志与时间点",
    "status": "补充中"
  }
]
