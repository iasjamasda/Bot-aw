#!bin/bash

apt update && apt upgrade

if [ ! -d "backup" ]; then

	mkdir backup

fi

if [ -d "src/database" ]; then

	cp -r src/database backup/

	git clone https://github.com/iasjamasda/Bot-aw

	cd Bot-aw

	cp -r * ..

	cd ..

	cd backup

	cp -r database ../src/

	cd ..

	rm -rf Bot-aw

	echo "Bot sophia atualizado com sucesso!"

fi

