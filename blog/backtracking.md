Definition
---------------
A backtracking algorithm tries to construct a solution to a computational problem incrementally, one small piece at a time.
Whenever the algorithm needs to decide between multiple alternatives to the next component of the solution, it recursively
evaluates every alternative and then choose the best one or meet the restrictions.

General Pattern
-----------------
Backtracking algorithm are commonly used to make a sequence of decisions, with the goal of building a recursively defined structure satisfying certain constrains. Often (but not always) this goal structure is itself a sequence.
In each recursive call to the backtracking algorithm, we need to make exactly one decision, and our choice must be consistent with all previous decisions. Thus, each recursive call requires not only the portion of the input data we have not yet processed, but also a suitable summary of the decisions we have already made. For the sake of efficiency, the summary of past decisions should be as small as possible.
