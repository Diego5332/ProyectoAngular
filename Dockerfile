FROM ubuntu:14.04

#intalar node apt-get
RUN sudo apt-get update \
&& apt-get install -y curl  \
&& curl -sL deb.nodesource.com/setup_10.x | bash - \
&& apt-get install -y node.js \
&& npm install -g @angular/cli \
&& mkdir app \
&& apt-get remove -y curl \
&& rm -rf /var/lib/apt/lists/*


#copia el directorio actual en el directorio del contenedor (/app)
COPY . /app

WORKDIR /app

RUN npm install

ENTRYPOINT [ "ng" , "serve" , "--host" , "0.0.0.0" ]