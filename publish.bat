:: 根据需要部署的服务器修改以下信息
@set PROJECT=node-ql
@set PROJECT-PATH=.

:: 以下内容除非你非常了解，否则不要修改
@set Host_Length=1

@set Host[0]-RHost=10.33.39.24
@set Host[0]-RUser=root
@set Host[0]-Rpw=123456
@set filepath=%~dp0

@SET Host_Index=0

:LoopStart
@IF %Host_Index% EQU %Host_Length% GOTO END
@set Host_Current-RHost=0
@set Host_Current-RUser=0
@set Host_Current-Rpw=0
@FOR /F "usebackq delims==- tokens=1-3" %%I IN (`SET Host[%Host_Index%]`) DO (
  SET Host_Current-%%J=%%K
)

@pscp -r -l %Host_Current-RUser% -pw %Host_Current-Rpw% -scp -r %filepath%\ %Host_Current-RUser%@%Host_Current-RHost%:~/microservice/%PROJECT%/
@putty -ssh -l %Host_Current-RUser% -pw %Host_Current-Rpw% -m %filepath%\remote.sh %Host_Current-RUser%@%Host_Current-RHost%

@SET /A Host_Index=%Host_Index% + 1
@GOTO LoopStart

:END
@echo finished
