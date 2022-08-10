
# 1-a
str = input("Enter a string: ")
new_str = str.split()
reversed_str = ''
for string in new_str:
    # print(string[::-1])
    reversed_str = reversed_str+string[::-1]+" "
print(reversed_str)

# 2
str1 = input("Enter a string 1: ")
str2 = input("Enter anoter string: ")
print(sorted(str1) == sorted(str2))

# 3
x="hello"
print(x) if 'x' in globals() else print("its undefined")


# try:
#     x
# except NameError:
#     print("its undefined")
# else:
#     print(x)
