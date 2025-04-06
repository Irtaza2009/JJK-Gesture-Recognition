// Custom Gesture (1)

import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const oneGesture = new GestureDescription("one");

// Index
oneGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
oneGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
oneGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1);
oneGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1);
oneGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1);
oneGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1);

// Thumb
oneGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
oneGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1);
oneGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);

// rest

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  oneGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  oneGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}
