@echo off
chcp 65001 >nul
title Next.js 开发服务器

echo ========================================
echo    Next.js 项目启动脚本
echo ========================================
echo.

echo [0/3] 检查端口占用情况...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000 ^| findstr LISTENING') do (
    echo 发现端口 3000 已被占用，正在关闭进程 PID: %%a
    taskkill /F /PID %%a >nul 2>&1
    timeout /t 1 /nobreak >nul
)

echo [1/3] 正在安装依赖...
call npm install
if errorlevel 1 (
    echo.
    echo [错误] 依赖安装失败！
    pause
    exit /b 1
)

echo.
echo [2/3] 正在启动开发服务器...
echo.
echo 服务器启动后，请在浏览器中访问: http://localhost:3000
echo 按 Ctrl+C 可以停止服务器
echo.
echo ========================================
echo.

call npm run dev

echo.
echo 服务器已停止。
pause 