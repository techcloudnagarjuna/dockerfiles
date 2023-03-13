ENTRYPOINT
ENTRYPOINT is also used to run the container just like CMD. But there are few differences.

We cant override ENTRYPOINT, but we can override CMD.
We can't override ENTRYPOINT, if you try to do so it will go and append to the ENTRYPOINT command.
If you use CMD and ENTRYPOINT and dont give any command from terminal, CMD acts as argument provider to ENTRYPOINT.
CMD will supply default arguments to ENTRYPOINT.
You can always override CMD arguments from runtime.
You can stop misusing your image with other commands.