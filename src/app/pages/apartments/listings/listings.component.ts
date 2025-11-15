
import { Component, Input } from '@angular/core';

export interface Listing {
  id: string;
  title: string;
  price: string;
  image: string;
  badge?: string;
  beds: string;
  baths: string;
  size: string;
  agentName: string;
  agentImage: string;
}

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent {
  // parent can pass items via @Input(); if none provided, we'll render defaultSamples
  @Input() items: Listing[] = [];

  defaultSamples: Listing[] = [
    {
      id: '1',
      title: 'Cozy 2-Bedroom Apartment in City Center',
      price: '₼ 250,000',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQs_4bZX_Q2mnMBlFiHBkev035eHLz_22ypMRQNktPt0jJzvaPAgNSO3bPpkvSlyjkfubkh-O9IaI-BfEtiU6ktCfkiHO6Ax5ScFLcjWWq8FkPbmT0R064oKKVCDCwi4PZYDIcVVpIlFA0pR6AdRoECMa9KXTx7EtQfeOwctpepZZOkm8QcPhFJ_6kkoog4kJJ1fO8NHxdWgxmwJFb6HQdCzM4g4e58y0Gkfx5tNkw2sC0RmoAxp1SLM9sJiyKQxhwaLX8BIuwZ_k',
      badge: 'New Listing',
      beds: '2 beds',
      baths: '2 baths',
      size: '120 sq m',
      agentName: 'John Doe',
      agentImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByj0jH1d02P0f1oDbKHG65dD53GjanETEkMHWHChdo9DaxqZbBQ_TPE19XCabffIvtt-3vICNdVRPG_cHQ9ef-5k9ieiNF-ZJDhzHGmqDs_8iM68YTs2LIMyNlXEZSD0HXOsiSJ7aO3OeX7rMgSHTQ-P58YemtWzGzMuoKj6LiIN9ALAjDHyvcuGtf_LNYQ88m0o_Y5S_N5G-x-hdu2WbgIlF4M950UzzD2yYMngHAJgRXCtZAT6YmhuEOMBnGmDXe5_N4EiXYD44'
    },
    {
      id: '2',
      title: 'Spacious 3-Bedroom Family Home',
      price: '₼ 480,000',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKzuxzHCgeoLV3apUKKCx7oa8y3VfLfZlEmr3sLd4maccVVyH7jb1IiTLUjri0N08bcvohkILdnAvythayvzfOjRpX2rvVO9Gp9J4ZhGGiurIxcD3TG2Je7svUEQdUTv6GMRPDhvyhdnI6HebXehi0_f0l1p4PawXeFxMC_yaMIkXLHzrqqLizEt1YyNczV1cZwqcJTGtzmY4aT5NTJMQjrOypIAPrfyyIf9SvHX_weI86JIBV7i6VP0e-JBkcUWRLY_qigHwQpQE',
      badge: 'Price Reduced',
      beds: '3 beds',
      baths: '2 baths',
      size: '180 sq m',
      agentName: 'Michael Chen',
      agentImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNNnyCHi5gJsfB0hf-dxhQy625esANsRCET2z1KHQHTJyJ0sdqfy6dKJypB-no3TmmXLpwSj8D5Fdz7JMVCdfHdFDIB4dOPELBkyudxiHhBoQXa6mQLHzEIKCFx-dhXlUUtBMvL6dVBTHN6fEW8N0evTfEfYX1NyH2rEEvcPov5WVc2V6HHg8HlvYFvZW7UiR6bYom78lxdiYOnIRqwREkEEeO4Ap4P9wJAft9My15y_y3Wv1szNaa2A-hixMZpVPSWZGev5MgXGo'
    },
    {
      id: '3',
      title: 'Luxury Penthouse with City Views',
      price: '₼ 1,200,000',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbE3GIdx_-7gbnFEvOF-kv-3Ehw61rvI7AMKJPd47Sl49IXvn3TYw_-RWu7WFP6TajQyxOcLOA1GIeWvHKwRAtkFWI3li8NPXUJf4Tu9NE75TQju4bzCzlEhkmoANVJgH2niFg_HCLPIlJxBfjQDJlA1hPohgRH1JskcAokC7YH0pGkinX2QwwQOdMK0KaXQPnDzenxIz79Wj01-0HksnHQHPqCWSzs5olABACPI28k-ZEJhEzeJtD5cjP9vAXX128ire0kXFvzmE',
      beds: '4 beds',
      baths: '3 baths',
      size: '250 sq m',
      agentName: 'Sarah Johnson',
      agentImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDW51upSyO1lNQN3gokPquazigax8BFtzTVdBR6YjFeYnN3duZ6r3x87rLhP1q1lpjPG2ZbTEbR7iVD4zP6b7zXjgQgHGya9Qvo0TEAn3mUXtUWso31wnxoAGRnB5HHp-bvXUmXKoXsGmtiR8mlP9Se_1Zc4F-RJ7_i9c0lH4abaqEVXTqGKt8uxI9itot2-4DriTVXQ0BFCyOQjubdS5qUzQDOEuiOFEWxQwru9U96UCSkmtxrAE6NTFJTmgrgD3FlURp20u25rpw'
    },
    {
      id: '4',
      title: 'Modern Studio Apartment with Balcony',
      price: '₼ 180,000',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMtzW0_5DCH8lkdj2hbSsCKwVzmh-KmJ4GyIV1YBxp6jhiD-dH3-tGft2M9LzpjnJLYig9IYT9VH-TRPKiaLGad-_rsKo4GaBROEsexzK1wbKdIn4_y30LOeusgBiaxKU9Uq-4PuJ2PeHOOcpDwIjOulK3J08XWEzkhhg6_sJ8MxFcJxF4rb_o_yz1OtgT3hvIAxOaAoyJgD01PXY-vKKOeheOJU1eM-uhtAHfLv1S5Q07jF1At7QlFFf4-yWnLVI-hN21Y25BTWc',
      beds: '1 bed',
      baths: '1 bath',
      size: '60 sq m',
      agentName: 'Emily White',
      agentImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDp7GLTqQAopSWC7-5x8LP9G793hsrQO8mpSYG9wY3j7zBZ4Gl7gbn7M_J-LZFzqDgdlyGvj8ZFDOIoa_9Q2m-q_gtS0XRdvj7yIguFuw_-zraGoj0SkapDHuk3k1J65B22RKaXnO01R4d6jFHctoUG4azrvhRUufvVeKV6AW1nQuuaUKe1CCeDiRK_04uw9ud3Z-focy3GZ23YiAHDrELRwvKDvOnk09AK4fNrf__PNWDqRWFQ6fTbfoWK_CPPPRX3mQ3dLX299JE'
    },
    // duplicate a few more to fill grid
    { ...this.defaultTemplate('5','Small Family Home','₼ 320,000','3 beds','2 baths','140 sq m','Agent A') },
    { ...this.defaultTemplate('6','Sunny One-Bedroom','₼ 150,000','1 bed','1 bath','55 sq m','Agent B') },
    { ...this.defaultTemplate('7','Comfortable 2-Bedroom','₼ 270,000','2 beds','2 baths','110 sq m','Agent C') },
    { ...this.defaultTemplate('8','Elegant 4-Bedroom Villa','₼ 980,000','4 beds','4 baths','350 sq m','Agent D') }
  ];

  // helper used only when building defaultSamples to avoid repeating long urls
  defaultTemplate(id: string, title: string, price: string, beds: string, baths: string, size: string, agentName: string): Listing {
    return {
      id,
      title,
      price,
      image: 'https://via.placeholder.com/640x360?text=Property+' + encodeURIComponent(id),
      beds,
      baths,
      size,
      agentName,
      agentImage: 'https://via.placeholder.com/80?text=' + encodeURIComponent(agentName)
    } as Listing;
  }

  get displayItems(): Listing[] {
    return (this.items && this.items.length) ? this.items : this.defaultSamples;
  }
}
