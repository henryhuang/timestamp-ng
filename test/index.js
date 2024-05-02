import test from "tape";
import tsng from "../dist/index.js";

test("time stamp equals", (t)=> {
    t.plan(1)
    const dateNow = new Date();
    const ts = new Date(2024, 4, 2).getTime().toString();
    const dateString = "20240502";
    const ts4dateString = tsng({
        date_string: dateString
    });
    t.deepEqual(ts4dateString, ts);
});

test("time stamp equals with custum format", (t)=> {
    t.plan(1)
    const ts = new Date(2024, 4, 2).getTime().toString();
    const dateString = "05-02-2024";
    const ts4dateString = tsng({
        date_string: dateString,
        format: "MM-DD-YYYY"
    });
    t.deepEqual(ts4dateString, ts);
});

test("show date string correct", (t)=> {
    t.plan(1)
    const date = new Date(2024, 4, 2);
    const ts = date.getTime().toString();
    const dateString = "05-02-2024";
    const ts4dateString = tsng({
        date_string: dateString,
        format: "MM-DD-YYYY",
        show_date_string: true
    });
    t.deepEqual(ts4dateString, `${date}: ${ts}`);
});