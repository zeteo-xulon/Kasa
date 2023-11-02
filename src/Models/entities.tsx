export interface Host {
  name: string;
  picture: string;
}
  
export interface Logement {
id: string;
title: string;
cover: string;
pictures: string[];
description: string;
host: Host; // Use de l'interface Host pour décrire la propriété host
rating: string;
location: string;
equipments: string[];
tags: string[];
}

export interface BannerInt {
  image: string;
  text: string;
}

export interface AboutModel {
  title: string,
  text: string
}