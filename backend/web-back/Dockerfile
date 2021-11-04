# backend/web-back/Dockerfile
# set base image
FROM python:3.7

# set environment variables
# モジュールをインポートしたときに作成されるキャッシュを作成させないようにする
ENV PYTHONDONTWRITEBYTECODE 1
# 非空なら標準出力・標準エラーのストリームのバッファリングを行わない
ENV PYTHONUNBUFFERED 1

# set work directory
WORKDIR /code

# install dependencies
COPY requirements.txt ./
RUN python3 -m pip install --upgrade pip setuptools
RUN pip install -r requirements.txt

# copy project
COPY . ./

# expose application port
EXPOSE 8000