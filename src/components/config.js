export default [
  {
    "type": "input",
    "name": "单行文本",
    "title": "单行文本",
    "placeholder": "请输入内容",
    "modelValue": "",
    "width": 100,
    "rulesConfig": {
      "trigger": "change",
      "isRequireRule": true,
      "messageTip": "aaaaa",
      "customRule": false,
      "customRuleContent": "",
      "rules": [
        {
          "required": true,
          "message": "aaaaa",
          "trigger": "change"
        }
      ]
    },
    "dataId": "jDxRUi5KxjvObkfqe6-zZ"
  },
  {
    "type": "radio",
    "name": "单选框组",
    "title": "单选框组",
    "modelValue": "3",
    "child": [
      {
        "label": "1",
        "size": "default",
        "content": "足球"
      },
      {
        "label": "2",
        "size": "default",
        "content": "篮球"
      },
      {
        "label": "3",
        "size": "default",
        "content": "排球"
      }
    ],
    "layout": "垂直布局",
    "width": 100,
    "rulesConfig": {
      "trigger": "change",
      "isRequireRule": true,
      "messageTip": "bbbbb",
      "customRule": false,
      "customRuleContent": "",
      "rules": [
        {
          "required": true,
          "message": "bbbbb",
          "trigger": "change"
        }
      ]
    },
    "dataId": "VbVjK0rJgUnKwtoUZrNiY"
  },
  {
    "type": "textarea",
    "name": "多行文本",
    "title": "多行文本",
    "placeholder": "请输入内容",
    "modelValue": "",
    "width": 100,
    "rulesConfig": {
      "trigger": "change",
      "isRequireRule": true,
      "messageTip": "cccccc",
      "customRule": false,
      "customRuleContent": "",
      "rules": [
        {
          "required": true,
          "message": "cccccc",
          "trigger": "change"
        }
      ]
    },
    "dataId": "VMByyHf6NVJCNm6TLPCma"
  },
  {
    "type": "checkbox",
    "name": "多选框组",
    "title": "多选框组",
    "modelValue": [],
    "trigger": "change",
    "child": [
      {
        "label": "1",
        "size": "default",
        "content": "option1"
      },
      {
        "label": "2",
        "size": "default",
        "content": "option2"
      },
      {
        "label": "3",
        "size": "default",
        "content": "option3"
      }
    ],
    "layout": "水平布局",
    "width": 100,
    "rulesConfig": {
      "trigger": "change",
      "isRequireRule": true,
      "messageTip": "dddddddd",
      "customRule": false,
      "customRuleContent": "",
      "rules": [
        {
          "required": true,
          "message": "dddddddd",
          "trigger": "change"
        }
      ]
    },
    "dataId": "qhjZqqPQsldlEunp_m5xE"
  }
]