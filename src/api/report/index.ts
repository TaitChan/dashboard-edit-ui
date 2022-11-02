import { report, report2 } from '@/api/mock'

export function getReportDetail(id: string) {
  if (id === '1') {
    return JSON.parse(JSON.stringify(report))
  }
  if (id === '2') {
    return JSON.parse(JSON.stringify(report2))
  }
}
