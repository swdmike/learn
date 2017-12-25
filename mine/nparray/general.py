'''
numpy中常用的方法
'''
import numpy as np

print("生成随机的矩阵")
a = np.random.randint(10, size=(3, 3))
print(a)
a = np.random.rand(3, 3)
print(a)

print("单位矩阵，对角矩阵")
a = np.identity(4, dtype=int)
print(a)
a = np.diag((1, 2, 3, 4))
print(a)

print("矩阵乘法")
a = np.array([[1, 2, 3], [-1, 5, 0]])
b = np.array([[1, 1, 4], [3, 0, -2], [3, 2, -1]])
print(a)
print(b)
print(np.dot(a, b))

print("矩阵对角线")
a = np.random.randint(10, size=(3, 3))
print(a)
a = np.diagonal(a)
print(a)

print("矩阵")
a = np.array([[-1, 5, 0]])
print(a.T)
