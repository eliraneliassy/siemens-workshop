import {fakeAsync, flush, flushMicrotasks, tick} from "@angular/core/testing";
import {delay, of} from "rxjs";


describe('AsyncTest', () => {

  let flag: boolean;
  beforeEach(() => {
    flag = false;
  })
  it('sync', () => {

    expect(flag).toBeFalsy();
    flag = true;
    expect(flag).toBeTruthy();
  })

  it('async', (done: jest.DoneCallback) => {

    // expect(flag).toBeFalsy();
    setTimeout(() => {
      flag = true;
      expect(flag).toBeTruthy();
      console.log(1);
      done();
    },4000)


  })

  it('fakeasync', fakeAsync(() => {

    of(1).pipe(
      delay(4000)
    ).subscribe(() =>
    flag = true
    )

    tick(2000);

    expect(flag).toBeFalsy()
    tick(2001);
    expect(flag).toBeTruthy();



  }))

  it('fakeasync - flush', fakeAsync(() => {

    setTimeout(() => {
      flag = true
    }, 2000);

    flush();
    flushMicrotasks()

    expect(flag).toBeTruthy()



  }))


})
