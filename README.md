# Simple Nodejs Redis

# Hướng dẫn chạy Redis trên Docker

## Bước 1: Tải Redis image từ Docker Hub

Sử dụng lệnh sau để tải redis image từ docker hub:

```
docker pull redis:tags
```

## Bước 2: Chạy Redis Container

Sau khi đã tải xong redis image, bạn có thể chạy redis container với lệnh sau:

```
docker run --name redis-container -d -p 6379:6379 redis
```

Trong đó:

- `--name redis-container`: Đặt tên cho container là `redis-container`
- `-d`: Chạy container ở chế độ nền (detached mode).
- `-p 6379:6379`: Ánh xạ port 6379 đến cổng 6379 trong container.

## Kiểm tra container:

```
docker ps
```

## Kết nối với redis:

```
docker exec -it redis-container redis-cli
```

## Dừng container:

```
docker stop redis-container
```

# Xóa container:

```
docker rm redis-container
```
