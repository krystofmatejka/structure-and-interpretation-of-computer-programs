(defun n! (n)
	(if (= n 1)
		1
		(* n (n! (- n 1)))))

(n! 1)
(n! 6)
(n! 10)

(defun nn! (n)

	(labels (
		(iter (product counter)
			(if (> counter n)
				product
				(iter (* product counter) (+ counter 1))))
	)

	(iter 1 1)))

(nn! 1)
(nn! 6)
(nn! 10)

