import { getInstructionalTime } from './helper';

describe('Test in Helper', ()=> {
  describe('getInstructionalTime()', ()=> {
    afterEach(()=>{
      jest.clearAllMocks();
    });
    
    it('Should return instructional time', ()=> {
      const schedule = [
          {
              id: 2,
              period: 1,
              days_of_week: ["regular_day","short_day"],
              duration: 45,
              name: "World History 2",
              tags: ["core","instructional"
              ]
          },
          {
              id: 3,
              period: 2,
              days_of_week: ["regular_day","short_day"],
              duration: 45,
              name: "Writing 2",
              tags: ["core","instructional"
              ]
          },
          {
              id: 4,
              period: 3,
              days_of_week: ["regular_day","short_day"],
              duration: 45,
              name: "Chemistry 2",
              tags: ["core","instructional"
              ]
          },
          {
              id: 5,
              period: 4,
              days_of_week: ["regular_day","short_day"],
              duration: 60,
              name: "Lunch",
              tags: ["lunch"
              ]
          },
          {
              id: 6,
              period: 5,
              days_of_week: ["regular_day","short_day"],
              duration: 45,
              name: "Algebra 2",
              tags: ["core","instructional"]
          },
          {
              id: 7,
              period: 6,
              days_of_week: ["regular_day"],
              duration: 45,
              name: "Biology 2",
              tags: ["core","instructional"]
          },
          {
              id: 8,
              period: 7,
              days_of_week: ["regular_day"],
              duration: 40,
              name: "Geology 2",
              tags: ["core","instructional"]
          }
      ];
      expect(getInstructionalTime(schedule)).toEqual(81.53846153846153);
    });

    it('Should return 0 instructional time is missing', ()=> {
      const schedule = [
          {
              id: 2,
              period: 1,
              days_of_week: ["regular_day","short_day"],
              duration: 45,
              name: "World History 2",
              tags: ["core"
              ]
          },
          {
              id: 3,
              period: 2,
              days_of_week: ["regular_day","short_day"],
              duration: 45,
              name: "Writing 2",
              tags: ["core"
              ]
          },
          {
              id: 6,
              period: 5,
              days_of_week: ["regular_day","short_day"],
              duration: 45,
              name: "Algebra 2",
              tags: ["core"]
          },
          {
              id: 7,
              period: 6,
              days_of_week: ["regular_day"],
              duration: 45,
              name: "Biology 2",
              tags: ["core"]
          }
      ];
      expect(getInstructionalTime(schedule)).toEqual(0);
    });
  })
})