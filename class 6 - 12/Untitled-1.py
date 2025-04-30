# Program to implement Newton's forward interpolation

def fact(n):
    if n == 1:
        return 1
    else:
        return n * fact(n - 1)

# Main program
n = int(input("Enter the number of points: "))
x = [0] * n
fx = [0] * n
fd = [[0 for i in range(n)] for j in range(n)]

# Getting input
xp = float(input("Enter the value of x: "))

for i in range(n):
    x[i] = float(input(f"Enter the value of x[{i}]: "))
    fx[i] = float(input(f"Enter the value of f(x) at x[{i}]: "))

# Calculating finite differences
h = x[1] - x[0]
s = (xp - x[0]) / h

for i in range(n):
    fd[i][0] = fx[i]

for i in range(1, n):
    for j in range(n - i):
        fd[j][i] = fd[j+1][i-1] - fd[j][i-1]

# Interpolation using the finite differences
v = fd[0][0]
for i in range(1, n):
    p = 1
    for k in range(i):
        p *= (s - k)
    v += (fd[0][i] * p) / fact(i)

print(f"Interpolation value at x = {xp} is {v}")
