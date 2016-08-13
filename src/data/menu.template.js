var MenuTemplate = {
    items: [
        {
            text:"数据管理",
            icon:"glyphicon-tasks",
            items: [
                {
                    text:"用户管理",
                    link:"user"
                },
                {
                    text:"角色管理",
                    link:"role"
                },
                {
                    text:"机构管理",
                    link:"health_ministry"
                },
                {
                    text:"检测类别管理",
                    link:"assay_category"
                },
                {
                    text:"代码组管理",
                    link:"code_group"
                },
                {
                    text:"代码管理",
                    link:"assay_code"
                }
            ],
            root: true
        },
        {
            text:"考评管理",
            icon:"glyphicon-list-alt",
            items: [
                {
                    text:"制作模板",
                    link:"template"
                },
                {
                    text:"考评记录",
                    link:"assessment"
                },
                {
                    text:"发起考评",
                    link:"assessment.new"
                }
            ],
            root: true
        },{
          text:"我的考评",
          icon:"glyphicon-list-alt",
          items:[
              {
                text:"我的考评",
                link:"activated_form"
              },
              {
                text:"考评历史",
                link:"closed_form"
              }
          ]
        }, {
           text:"质量测控",
           icon:"glyphicon-list-alt",
           items:[
               {
                text:"制作模板",
                link:"iqc_template"
               }
           ],
           root:true
        },
        {
            text:"数据统计",
            icon:"glyphicon-stats",
            items: [

            ],
            root: true
        }
    ]
}
module.exports = MenuTemplate;
