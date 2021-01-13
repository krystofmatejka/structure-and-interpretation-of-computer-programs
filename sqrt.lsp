;; Square Roots Using Newton's Method

(defun square (x) (* x x))


(defun good-enough (guess previous-guess x)
	(< (abs (- previous-guess guess)) (* guess 0.01)))


(defun average-of-two (x y)
	(* (+ x y) 0.5))


(defun improve-guess (guess x)
	(average-of-two guess (/ x guess)))


(defun sqrt-iter (guess previous-guess x)
	(if (good-enough guess previous-guess x)
		guess
		(sqrt-iter (improve-guess guess x) guess x)
	))


(defun sqrt-newton (x)
	(sqrt-iter 1 2 x))


(sqrt-newton 2)
(sqrt-newton 9)
(sqrt-newton 100)
(sqrt-newton 666)
(sqrt-newton 25070536909365)

