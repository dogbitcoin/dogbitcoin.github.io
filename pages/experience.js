import React, { memo } from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
const experiences = [
  {
    company: "薄雾创投",
    position: "运营总监",
    time: "2021.07 - 2022.11",
    core: "统筹运营多个项目",
    detail: [
      "统筹公司孵化的多个项目",
      "制定公司孵化项目运营策略，负责扩大项目的推广与运营",
      "运营和拓展公司项目，实现运营目标。策划营销活动并负责执行",
      "负责孵化项目的渠道开发、市场调研和项目管理",
      "负责孵化项目运营活动的策划和活动执行的跟进，并对活动的效果负责",
      "负责孵化项目完成后对项目活动进行回顾和总结并汇报",
      "定期跟踪、分析和总结孵化项目日常数据，不断优化运营方法和策略，并执行",
      "分析相关的项目，总结运营的优点，不断提高孵化项目的运营质量"
    ]

  },
  {
    company: "现通科技",
    position: "运营主管",
    time: "2020.11 - 2021.05",
    core: "从〇到一项目运营",
    detail: [
      "管理社群部门，深挖社群用户需求，维系活跃度，提高客户粘性",
      "根据项目需求，制定海外社媒多平台和渠道运营计划，以及跟进执行",
      "策划品牌日常/专题活动，提升粉丝活跃度和忠诚度，带动粉丝数量增长",
      "配合公司品牌需求节奏及热点、事件、趋势负责策划、落地内容",
      "管理运营团队，带领团队完成阶段性运营指标"
    ]

  },
  {
    company: "亞视企业",
    position: "客服主管",
    time: "2019.09 - 2020.10",
    core: "从〇到一搭建交易所客服体系",
    detail: [
      "监督客户服务运营，包括监控和报告指标",
      "确保良好的服务质量和严格遵守流程",
      "参与客服专员招聘活动（筛选、面试）与培训",
      "提供 KPI 绩效监控，识别服务质量趋势和问题",
      "对每周、每月和每季度的业务数据进行评估总结",
      "及时向上级领导汇报部门问题、总结、并给出建议",
      "与其他部门团队进行跨职能合作，确保提供一流的客户服务"
    ]

  },
  {
    company: "三赢企业",
    position: "商务运营",
    time: "2018.10-2019.09",
    core: "商务谈判与项目对接",
    detail: [
      "研究和确定新的合作机会，包括新项目、增长领域、趋势和产品",
      "培养和发展与战略合作伙伴的关系，协调和解决合作过程中的问题",
      "收集各种市场信息，对行业内竞争对手进行分析、整理，并及时向上级反馈",
      "负责与合作机构的商务谈判、效果监控、合作实施，并与团队内其他部门进行协调",
      "协助创始人制定中、长期战略发展规划、推动平台的发展"
    ]

  }
]
const experience = () => 
  (
    <div className="w-full px-0 pt-0">
      <div className="mx-auto w-full  rounded-2xl bg-white p-2">
          {
            experiences.map((item, index) => 
               <>
                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-grey-100 px-4 py-2 text-left text-sm font-medium text-grey-900 hover:bg-grey-200 focus:outline-none focus-visible:ring focus-visible:ring-grey-500 focus-visible:ring-opacity-75">
                        <div className='grid grid-cols-3 w-full '>
                          <div>{item.company}</div>
                          <div>{item.position}</div>
                          <div>{item.time}</div>
                        </div>
                        <ChevronUpIcon
                          className={`${open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-grey-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-0 pb-2 text-sm text-grey-500">
                        <ul>
                          {
                            item.detail.map(item => 
                              <li className='text-slate-700 pr-10 pl-5 pt-2 pb-2'>{item}</li>
                            )
                          }
                        </ul>
                        <h3 className='text-slate-700 font-bold pt-3'>核心技能: {item.core}</h3>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </>
            )
          }
      </div>
    </div>
  )

export default experience;