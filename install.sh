# Copy files
mkdir /opt/deno-helloiam
cp src/* /opt/deno-helloiam/
cp helloiam.service /etc/systemd/system/

# Start service
systemctl enable helloiam
systemctl start helloiam