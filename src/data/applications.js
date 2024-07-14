const applications = [
  {
    name: 'Doppelganger',
    apdex: 1.00,
    errorRate: '0%',
    throughput: '7 rpm',
    responseTime: '0.26 s',
    violations: 2,
    hosts: 1,
    status: 'error'
  },
  {
    name: 'Metric Timeslice Service Staging',
    apdex: 0.98,
    errorRate: '0%',
    throughput: '2.23k rpm',
    responseTime: '0.17 s',
    violations: 1,
    hosts: 4,
    status: 'error'
  },
  {
    name: 'Seymour Feeds Service (Staging)',
    apdex: 0.83,
    errorRate: '15%',
    throughput: '9 rpm',
    responseTime: '14.86 s',
    violations: 1,
    hosts: 4,
    status: 'error'
  },
  {
    name: 'Label Service - Production',
    apdex: 1.00,
    errorRate: '0%',
    throughput: '23.87k rpm',
    responseTime: '0.01 s',
    violations: 1,
    hosts: 4,
    status: 'warning'
  },
  {
    name: 'RPM Test 2',
    apdex: 0.98,
    errorRate: '0%',
    throughput: '0 rpm',
    responseTime: '0.0 s',
    violations: 1,
    hosts: 2,
    status: 'success'
  },
  {
    name: 'RPM Test 4',
    apdex: 1.00,
    errorRate: '0%',
    throughput: '63 rpm',
    responseTime: '0.01 s',
    violations: 1,
    hosts: 2,
    status: 'success'
  },
  {
    name: 'synthetics-minion',
    apdex: 1.00,
    errorRate: '0%',
    throughput: '23.81k rpm',
    responseTime: '0.01 s',
    violations: 0,
    hosts: 581,
    status: 'success'
  }
];

export default applications;
