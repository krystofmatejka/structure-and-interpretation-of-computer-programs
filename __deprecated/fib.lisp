(defun fib-naive (n)
	(cond 
		((= n 0) 0)
		((= n 1) 1)
		(T (+ (fib-naive (- n 1)) (fib-naive (- n 2))))))

(fib-naive 8)

(defun fib (n)
	(labels (
		(iter (a b c)
			(if (= c 0)
			b
			(iter (+ a b) a (- c 1)))
		)
	)

	(iter 1 0 n)))

(fib 8)

