(defun f (x)

	(labels
	(
		(f2 (y) 
			(+ y y))

		(f3 (q)
			(+ q q))
	)
	(f2 (f3 x))
	)
	
	
)

(f 5)
(f 10)

