docker run --name movie-service -p 443:3000 --add-host manager1:192.168.99.100 --add-host worker1:192.168.99.101 --add-host worker2:192.168.99.102 -d movies-service