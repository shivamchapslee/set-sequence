import { setsequence } from '../setsequence';

test('Set sequence', () => {
  const initial: any[]=[
    {'num':1},
    {'num':2},
    {'num':3},
    {'num':4},
    {'num':5},
    {'num':6},
    {'num':7}
  ];
  const final: any[]=[
    {'num':4},
    {'num':2},
    {'num':3},
    {'num':1},
    {'num':7},
    {'num':6},
    {'num':5}
  ];
  const result1:any[] = [
    {'num':1},
    {'num':2},
    {'num':3},
    {'num':4},
    {'num':5},
    {'num':6},
    {'num':7}
  ];

  // var result1:any[] = [1,2,3,4,5,6,7]; 
  //   expect(setsequence(initial,final,'num')).toBe(result1);
  // });

  expect(setsequence(initial,final,'num')).toStrictEqual(result1);
});