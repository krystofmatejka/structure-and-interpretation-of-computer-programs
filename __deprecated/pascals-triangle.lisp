;; Pascal's triangle

(defun ptr (n)
	(if (< n 3)
	n
	(+ (ptr (- n 1)) (* (ptr (- n 2)) 2) (* (ptr (- n 3)) 3))
	)
	
)

(ptr 1)
(ptr 2)
(ptr 3)
(ptr 4)
(ptr 5)

