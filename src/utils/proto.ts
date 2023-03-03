import Long from "long";

export interface Duration {
  /**
   * Signed seconds of the span of time. Must be from -315,576,000,000
   * to +315,576,000,000 inclusive. Note: these bounds are computed from:
   * 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
   */
  seconds: Long;
  /**
   * Signed fractions of a second at nanosecond resolution of the span
   * of time. Durations less than one second are represented with a 0
   * `seconds` field and a positive or negative `nanos` field. For durations
   * of one second or more, a non-zero value for the `nanos` field must be
   * of the same sign as the `seconds` field. Must be from -999,999,999
   * to +999,999,999 inclusive.
   */

  nanos: number;
}

/**
 * @param duration nanoseconds
 */
export function toDuration(duration: string): Duration {
  return {
    seconds: Long.fromNumber(Math.floor(parseInt(duration) / 1000000000)),
    nanos: parseInt(duration) % 1000000000,
  };
}

/**
 * @return nanoseconds
 */
export function fromDuration(duration: Duration): string {
  return (
    parseInt(duration.seconds.toString()) * 1000000000 +
    duration.nanos
  ).toString();
}

interface Timestamp {
  /**
   * Represents seconds of UTC time since Unix epoch
   * 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
   * 9999-12-31T23:59:59Z inclusive.
   */
  seconds: Long;
  /**
   * Non-negative fractions of a second at nanosecond resolution. Negative
   * second values with fractions must still have non-negative nanos values
   * that count forward in time. Must be from 0 to 999,999,999
   * inclusive.
   */

  nanos: number;
}

export function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1000) * 1000000;
  return {
    seconds,
    nanos,
  };
}

export function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1000;
  millis += t.nanos / 1000000;
  return new Date(millis);
}

export function numberToLong(number: number) {
  return Long.fromNumber(number);
}
