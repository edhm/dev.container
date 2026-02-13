#
 #  SPDX-FileCopyrightText: 2025 Edgar Huerta Mendoza ed.huerta.m@hotmail.com
 #  SPDX-FileCopyrightText:2025 @edhm
 #  SPDX-License-Identifier: MIT
#

FROM node:22

WORKDIR /workspace

# NOTA: NO copiamos nada aún porque el proyecto NO EXISTE
# Primero creamos el proyecto, luego construimos la imagen

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]