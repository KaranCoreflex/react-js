export const data = [
  {
    EmployeeId: "626460",
    EmployeeName: "Carlos A Jimenez",
    EmployeeFirstName: null,
    EmployeeLastName: null,
    Supervisor: { id: "625937", FullName: "David C Brolin" },
    RouteId: "626460",
    PausedCalls: [],
    CancelledCalls: [],
    MostRecentAction: {
      Type: "TimesheetSubmitteed",
      Status: "Completed",
      BreakTypeId: null,
      Customer: null,
      Timestamp: "2022-05-05T08:44:05.28Z",
    },
    ClockIn: [
      {
        TimesheetId: "a7dea2eb-eb97-4271-bad6-0afb72f29073",
        Value: "2022-05-05T07:48:58Z",
      },
      {
        TimesheetId: "c1ccdc99-48d4-43c2-a564-81d881e93f22",
        Value: "2022-05-05T08:11:33Z",
      },
      {
        TimesheetId: "1f45bd6e-4d63-4e11-9c47-224201ff495d",
        Value: "2022-05-05T08:22:31Z",
      },
    ],
    ClockOut: [
      {
        TimesheetId: "a7dea2eb-eb97-4271-bad6-0afb72f29073",
        Value: "2022-05-05T08:11:21Z",
      },
      {
        TimesheetId: "c1ccdc99-48d4-43c2-a564-81d881e93f22",
        Value: "2022-05-05T08:20:27.25Z",
      },
      {
        TimesheetId: "1f45bd6e-4d63-4e11-9c47-224201ff495d",
        Value: "2022-05-05T08:44:01Z",
      },
    ],
    TotalCalls: 5,
    CompletedCalls: 0,
    TotalDistanceMeters: [
      { TimesheetId: "a7dea2eb-eb97-4271-bad6-0afb72f29073", Value: 11031 },
      { TimesheetId: "c1ccdc99-48d4-43c2-a564-81d881e93f22", Value: 4266 },
      { TimesheetId: "1f45bd6e-4d63-4e11-9c47-224201ff495d", Value: 11099 },
    ],
    MostRecentCustomer: {
      CustomerId: "500506368",
      CustomerName: "LA PARADA CT",
    },
    Error: false,
    MostRecentLocation: {
      id: "42f7630d-4c98-4e6f-8693-01a2e62f8d12",
      UserId: "30a36a84-bb8d-4e15-9393-d46cbab25535",
      RouteId: "626460",
      DeviceId: "32e08538-7c1a-4853-b094-866663bebbee",
      EventType: "LocationUPDATE",
      Accuracy: 5,
      LocationTime: "2022-05-05T08:43:53Z",
      RecordedDate: "2022-05-05T08:43:52Z",
      Lat: 18.4811881,
      Lng: 73.9563888,
    },
    LastSynced: "2022-05-05T09:44:03Z",
    NotMoved: false,
  },
  {
    EmployeeId: "707280",
    EmployeeName: "Joshua Anderson",
    EmployeeFirstName: null,
    EmployeeLastName: null,
    Supervisor: { id: "625937", FullName: "David C Brolin" },
    RouteId: "5000+Providence+N12",
    MostRecentAction: {
      Type: "NoStatus",
      Status: "NoStatus",
      BreakTypeId: null,
      Customer: null,
      Timestamp: null,
    },
    ClockIn: [],
    ClockOut: [],
    TotalCalls: 4,
    CompletedCalls: 0,
    TotalDistanceMeters: [],
    MostRecentCustomer: null,
    Error: false,
    MostRecentLocation: {
      id: "09fae1ad-6526-476f-88da-df84afb7d54f",
      UserId: "23662c4e-5dd0-4340-a466-7f5c91daefdc",
      RouteId: "707280",
      DeviceId: "d09388c6-9886-4e26-aa17-e94a52dc2f1c",
      EventType: "LocationUPDATE",
      Accuracy: 93,
      LocationTime: "2022-04-13T15:54:02Z",
      RecordedDate: "2022-04-13T15:54:02Z",
      Lat: 18.6521222,
      Lng: 73.792211,
    },
    LastSynced: "2022-04-15T21:26:35Z",
    NotMoved: true,
  },
  {
    EmployeeId: "723533",
    EmployeeName: "Jonathan D Fox",
    EmployeeFirstName: null,
    EmployeeLastName: null,
    Supervisor: { id: "625937", FullName: "David C Brolin" },
    RouteId: null,
    MostRecentAction: {
      Type: "ClockedIn",
      Status: "Completed",
      BreakTypeId: null,
      Customer: null,
      Timestamp: "2022-05-05T09:43:38.408Z",
    },
    ClockIn: [
      {
        TimesheetId: "1a97cdfd-6b19-4933-bd6a-30d812e87977",
        Value: "2022-05-05T08:32:40Z",
      },
    ],
    ClockOut: [
      { TimesheetId: "1a97cdfd-6b19-4933-bd6a-30d812e87977", Value: null },
    ],
    TotalCalls: 0,
    CompletedCalls: 0,
    TotalDistanceMeters: [
      { TimesheetId: "1a97cdfd-6b19-4933-bd6a-30d812e87977", Value: 0 },
    ],
    MostRecentCustomer: null,
    Error: false,
    MostRecentLocation: {
      id: "3d786d93-5729-4a94-8f52-a3697155272d",
      UserId: "8b56ee6b-9b65-4c8e-bca3-41cd53b6b60b",
      RouteId: "723533",
      DeviceId: "16b7f8cf-3c05-4245-bff7-14fe08f8bda1",
      EventType: "LocationUPDATE",
      Accuracy: 13,
      LocationTime: "2022-05-05T09:59:15Z",
      RecordedDate: "2022-05-05T09:59:21Z",
      Lat: 12.9659973,
      Lng: 77.6036328,
    },
    LastSynced: "2022-05-05T09:46:18Z",
    NotMoved: false,
  },
  {
    EmployeeId: "723533",
    EmployeeName: "David C Brolin",
    EmployeeFirstName: null,
    EmployeeLastName: null,
    Supervisor: { id: "625937", FullName: "David C Brolin" },
    RouteId: null,
    MostRecentAction: {
      Type: "ClockedIn",
      Status: "Completed",
      BreakTypeId: null,
      Customer: null,
      Timestamp: "2022-05-05T09:43:38.408Z",
    },
    ClockIn: [
      {
        TimesheetId: "1a97cdfd-6b19-4933-bd6a-30d812e87977",
        Value: "2022-05-05T08:32:40Z",
      },
    ],
    ClockOut: [
      { TimesheetId: "1a97cdfd-6b19-4933-bd6a-30d812e87977", Value: null },
    ],
    TotalCalls: 0,
    CompletedCalls: 0,
    TotalDistanceMeters: [
      { TimesheetId: "1a97cdfd-6b19-4933-bd6a-30d812e87977", Value: 0 },
    ],
    MostRecentCustomer: null,
    Error: false,
    MostRecentLocation: {
      id: "3d786d93-5729-4a94-8f52-a3697155272d",
      UserId: "8b56ee6b-9b65-4c8e-bca3-41cd53b6b60b",
      RouteId: "723533",
      DeviceId: "16b7f8cf-3c05-4245-bff7-14fe08f8bda1",
      EventType: "LocationUPDATE",
      Accuracy: 13,
      LocationTime: "2022-05-05T09:59:15Z",
      RecordedDate: "2022-05-05T09:59:21Z",
      Lat: 12.9659973,
      Lng: 77.6036328,
    },
    LastSynced: "2022-05-05T09:46:18Z",
    NotMoved: false,
  },
  {
    EmployeeId: "723533",
    EmployeeName: "A mjksd",
    EmployeeFirstName: null,
    EmployeeLastName: null,
    Supervisor: { id: "625937", FullName: "David C Brolin" },
    RouteId: null,
    MostRecentAction: {
      Type: "ClockedIn",
      Status: "Completed",
      BreakTypeId: null,
      Customer: null,
      Timestamp: "2022-05-05T09:43:38.408Z",
    },
    ClockIn: [
      {
        TimesheetId: "1a97cdfd-6b19-4933-bd6a-30d812e87977",
        Value: "2022-05-05T08:32:40Z",
      },
    ],
    ClockOut: [
      { TimesheetId: "1a97cdfd-6b19-4933-bd6a-30d812e87977", Value: null },
    ],
    TotalCalls: 0,
    CompletedCalls: 0,
    TotalDistanceMeters: [
      { TimesheetId: "1a97cdfd-6b19-4933-bd6a-30d812e87977", Value: 0 },
    ],
    MostRecentCustomer: null,
    Error: false,
    MostRecentLocation: {
      id: "3d786d93-5729-4a94-8f52-a3697155272d",
      UserId: "8b56ee6b-9b65-4c8e-bca3-41cd53b6b60b",
      RouteId: "723533",
      DeviceId: "16b7f8cf-3c05-4245-bff7-14fe08f8bda1",
      EventType: "LocationUPDATE",
      Accuracy: 13,
      LocationTime: "2022-05-05T09:59:15Z",
      RecordedDate: "2022-05-05T09:59:21Z",
      Lat: 12.9659973,
      Lng: 77.6036328,
    },
    LastSynced: "2022-05-05T09:46:18Z",
    NotMoved: false,
  },
  {
    EmployeeId: "723533",
    EmployeeName: "Bsasas",
    EmployeeFirstName: null,
    EmployeeLastName: null,
    Supervisor: { id: "625937", FullName: "David C Brolin" },
    RouteId: null,
    MostRecentAction: {
      Type: "ClockedIn",
      Status: "Completed",
      BreakTypeId: null,
      Customer: null,
      Timestamp: "2022-05-05T09:43:38.408Z",
    },
    ClockIn: [
      {
        TimesheetId: "1a97cdfd-6b19-4933-bd6a-30d812e87977",
        Value: "2022-05-05T08:32:40Z",
      },
    ],
    ClockOut: [
      { TimesheetId: "1a97cdfd-6b19-4933-bd6a-30d812e87977", Value: null },
    ],
    TotalCalls: 0,
    CompletedCalls: 0,
    TotalDistanceMeters: [
      { TimesheetId: "1a97cdfd-6b19-4933-bd6a-30d812e87977", Value: 0 },
    ],
    MostRecentCustomer: null,
    Error: false,
    MostRecentLocation: {
      id: "3d786d93-5729-4a94-8f52-a3697155272d",
      UserId: "8b56ee6b-9b65-4c8e-bca3-41cd53b6b60b",
      RouteId: "723533",
      DeviceId: "16b7f8cf-3c05-4245-bff7-14fe08f8bda1",
      EventType: "LocationUPDATE",
      Accuracy: 13,
      LocationTime: "2022-05-05T09:59:15Z",
      RecordedDate: "2022-05-05T09:59:21Z",
      Lat: 12.9659973,
      Lng: 77.6036328,
    },
    LastSynced: "2022-05-05T09:46:18Z",
    NotMoved: false,
  },
];
