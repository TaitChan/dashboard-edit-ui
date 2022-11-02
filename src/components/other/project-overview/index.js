export const getOption = (data) => {
  const id = 'project-over-view'
  const label = '项目概览'
  const exampleData = [
    { value: 50, name: '进行中' },
    { value: 34, name: '已完成' },
    { value: 16, name: '未开始' },
  ]
  const _data = data || exampleData
  const option = {
    color: ['#5ACBA8', '#3C7AFA', '#D4D4D4'],
    title: {
      text: 118, //主标题文本
      subtext: '项目数', //副标题文本
      left: 'center',
      top: '25%',
      textStyle: {
        fontSize: 40,
        fontWeight: '600',
        color: '#4A4A4A',
        align: 'center',
      },
      subtextStyle: {
        fontSize: 14,
        fontWeight: '400',
        color: '#4A4A4A',
      },
    },
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        type: 'pie',
        roseType: true,
        radius: ['75%', '90%'],
        emptyCircleStyle: {
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          shadowBlur: 10,
        },
        labelLine: {
          normal: {
            // 统一设置指示线长度
            length: 0,
          },
        },
        data: _data,
      },
    ],
  }
  return {
    id,
    label,
    option,
  }
}
