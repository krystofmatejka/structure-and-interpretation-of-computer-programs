;; Square Roots Using Newton's Method

(defun sqrt-newton (x)

	(labels (
		(good-enough (guess previous-guess)
			(< (abs (- previous-guess guess)) (* guess 0.01)))


		(average-of-two (x y)
			(* (+ x y) 0.5))


		(improve-guess (guess)
			(average-of-two guess (/ x guess)))


		(sqrt-iter (guess previous-guess)
			(if (good-enough guess previous-guess)
				guess
				(sqrt-iter (improve-guess guess) guess)
			))
	)

	(sqrt-iter 1 2)))


(sqrt-newton 2)
(sqrt-newton 9)
(sqrt-newton 100)
(sqrt-newton 666)
(sqrt-newton 25070536909365)

