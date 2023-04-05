
import React, { useEffect,useState } from "react";
import HomeEvents from "../components/HomeEvents/HomeEvents";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/navbar";
import { fetchHomePageData } from "../api";
import MediaComponent from "../components/MediaComponent/MediaComponent";

const HomeScreen = () => {
    const [data, setData] = useState({
        // "id": 1,
        // "HomePage_Heading": "Sports Board",
        // "HomePage_Slogan": "Sportsefre",
        // "createdAt": "2023-02-22T19:44:35.110Z",
        // "updatedAt": "2023-04-02T17:53:38.097Z",
        // "publishedAt": "2023-02-22T19:44:37.153Z",
        // "Component": [
        //   {
        //     "id": 1,
        //     "Component_name": "About Us",
        //     "Component_data": "You are here for an overall development of your personality, so to keep you healthy and fit, we have all the facilities for sports, both indoor and outdoor.\nAll outdoor sports like athletics, swimming, cricket, football, hockey, basketball, volleyball, etc. and indoor sports like table tennis, weight lifting, chess, carrom, squash, etc. are actively played by all throughout the year.\n",
        //     "Component_Image": {
        //       "id": 1,
        //       "name": "Screenshot 2022-10-30 at 4.18.png",
        //       "alternativeText": null,
        //       "caption": null,
        //       "width": 459,
        //       "height": 470,
        //       "formats": {
        //         "thumbnail": {
        //           "ext": ".png",
        //           "url": "/uploads/thumbnail_Screenshot_2022_10_30_at_4_18_7b75220940.png",
        //           "hash": "thumbnail_Screenshot_2022_10_30_at_4_18_7b75220940",
        //           "mime": "image/png",
        //           "name": "thumbnail_Screenshot 2022-10-30 at 4.18.png",
        //           "path": null,
        //           "size": 73.83,
        //           "width": 152,
        //           "height": 156
        //         }
        //       },
        //       "hash": "Screenshot_2022_10_30_at_4_18_7b75220940",
        //       "ext": ".png",
        //       "mime": "image/png",
        //       "size": 358.01,
        //       "url": "/uploads/Screenshot_2022_10_30_at_4_18_7b75220940.png",
        //       "previewUrl": null,
        //       "provider": "local",
        //       "provider_metadata": null,
        //       "folderPath": "/",
        //       "createdAt": "2023-02-22T19:54:15.300Z",
        //       "updatedAt": "2023-02-22T19:54:15.300Z"
        //     }
        //   },
        // ],
        // "Media_Component": [
        //   {
        //     "id": 1,
        //     "Component_name": "Our facilities.",
        //     "Media_Description": "You are here for an overall development of your personality, so to keep you healthy and fit, we have all the facilities for sports, both indoor and outdoor.\n",
        //     "Images": [
        //       {
        //         "id": 2,
        //         "name": "Group 80.png",
        //         "alternativeText": null,
        //         "caption": null,
        //         "width": 276,
        //         "height": 329,
        //         "formats": {
        //           "thumbnail": {
        //             "ext": ".png",
        //             "url": "/uploads/thumbnail_Group_80_c49ef01c6e.png",
        //             "hash": "thumbnail_Group_80_c49ef01c6e",
        //             "mime": "image/png",
        //             "name": "thumbnail_Group 80.png",
        //             "path": null,
        //             "size": 64.26,
        //             "width": 131,
        //             "height": 156
        //           }
        //         },
        //         "hash": "Group_80_c49ef01c6e",
        //         "ext": ".png",
        //         "mime": "image/png",
        //         "size": 204.18,
        //         "url": "/uploads/Group_80_c49ef01c6e.png",
        //         "previewUrl": null,
        //         "provider": "local",
        //         "provider_metadata": null,
        //         "folderPath": "/",
        //         "createdAt": "2023-02-22T19:56:03.601Z",
        //         "updatedAt": "2023-02-22T20:55:03.626Z"
        //       },
        //       {
        //         "id": 3,
        //         "name": "Group 97.png",
        //         "alternativeText": null,
        //         "caption": null,
        //         "width": 347,
        //         "height": 399,
        //         "formats": {
        //           "thumbnail": {
        //             "ext": ".png",
        //             "url": "/uploads/thumbnail_Group_97_ccb45c9d64.png",
        //             "hash": "thumbnail_Group_97_ccb45c9d64",
        //             "mime": "image/png",
        //             "name": "thumbnail_Group 97.png",
        //             "path": null,
        //             "size": 61.17,
        //             "width": 136,
        //             "height": 156
        //           }
        //         },
        //         "hash": "Group_97_ccb45c9d64",
        //         "ext": ".png",
        //         "mime": "image/png",
        //         "size": 249.17,
        //         "url": "/uploads/Group_97_ccb45c9d64.png",
        //         "previewUrl": null,
        //         "provider": "local",
        //         "provider_metadata": null,
        //         "folderPath": "/",
        //         "createdAt": "2023-02-22T19:56:03.676Z",
        //         "updatedAt": "2023-02-22T19:56:03.676Z"
        //       },
        //       {
        //         "id": 1,
        //         "name": "Screenshot 2022-10-30 at 4.18.png",
        //         "alternativeText": null,
        //         "caption": null,
        //         "width": 459,
        //         "height": 470,
        //         "formats": {
        //           "thumbnail": {
        //             "ext": ".png",
        //             "url": "/uploads/thumbnail_Screenshot_2022_10_30_at_4_18_7b75220940.png",
        //             "hash": "thumbnail_Screenshot_2022_10_30_at_4_18_7b75220940",
        //             "mime": "image/png",
        //             "name": "thumbnail_Screenshot 2022-10-30 at 4.18.png",
        //             "path": null,
        //             "size": 73.83,
        //             "width": 152,
        //             "height": 156
        //           }
        //         },
        //         "hash": "Screenshot_2022_10_30_at_4_18_7b75220940",
        //         "ext": ".png",
        //         "mime": "image/png",
        //         "size": 358.01,
        //         "url": "/uploads/Screenshot_2022_10_30_at_4_18_7b75220940.png",
        //         "previewUrl": null,
        //         "provider": "local",
        //         "provider_metadata": null,
        //         "folderPath": "/",
        //         "createdAt": "2023-02-22T19:54:15.300Z",
        //         "updatedAt": "2023-02-22T19:54:15.300Z"
        //       },
        //       {
        //         "id": 10,
        //         "name": "uttu.jpg",
        //         "alternativeText": null,
        //         "caption": null,
        //         "width": 1080,
        //         "height": 1080,
        //         "formats": {
        //           "large": {
        //             "ext": ".jpg",
        //             "url": "/uploads/large_uttu_a8e9fcef41.jpg",
        //             "hash": "large_uttu_a8e9fcef41",
        //             "mime": "image/jpeg",
        //             "name": "large_uttu.jpg",
        //             "path": null,
        //             "size": 97.22,
        //             "width": 1000,
        //             "height": 1000
        //           },
        //           "small": {
        //             "ext": ".jpg",
        //             "url": "/uploads/small_uttu_a8e9fcef41.jpg",
        //             "hash": "small_uttu_a8e9fcef41",
        //             "mime": "image/jpeg",
        //             "name": "small_uttu.jpg",
        //             "path": null,
        //             "size": 31.51,
        //             "width": 500,
        //             "height": 500
        //           },
        //           "medium": {
        //             "ext": ".jpg",
        //             "url": "/uploads/medium_uttu_a8e9fcef41.jpg",
        //             "hash": "medium_uttu_a8e9fcef41",
        //             "mime": "image/jpeg",
        //             "name": "medium_uttu.jpg",
        //             "path": null,
        //             "size": 62.06,
        //             "width": 750,
        //             "height": 750
        //           },
        //           "thumbnail": {
        //             "ext": ".jpg",
        //             "url": "/uploads/thumbnail_uttu_a8e9fcef41.jpg",
        //             "hash": "thumbnail_uttu_a8e9fcef41",
        //             "mime": "image/jpeg",
        //             "name": "thumbnail_uttu.jpg",
        //             "path": null,
        //             "size": 5.09,
        //             "width": 156,
        //             "height": 156
        //           }
        //         },
        //         "hash": "uttu_a8e9fcef41",
        //         "ext": ".jpg",
        //         "mime": "image/jpeg",
        //         "size": 81.72,
        //         "url": "/uploads/uttu_a8e9fcef41.jpg",
        //         "previewUrl": null,
        //         "provider": "local",
        //         "provider_metadata": null,
        //         "folderPath": "/",
        //         "createdAt": "2023-02-22T21:04:15.193Z",
        //         "updatedAt": "2023-02-22T21:04:15.193Z"
        //       },
        //       {
        //         "id": 12,
        //         "name": "interiit.jpeg",
        //         "alternativeText": null,
        //         "caption": null,
        //         "width": 640,
        //         "height": 640,
        //         "formats": {
        //           "small": {
        //             "ext": ".jpeg",
        //             "url": "/uploads/small_interiit_0eb28ab357.jpeg",
        //             "hash": "small_interiit_0eb28ab357",
        //             "mime": "image/jpeg",
        //             "name": "small_interiit.jpeg",
        //             "path": null,
        //             "size": 12.1,
        //             "width": 500,
        //             "height": 500
        //           },
        //           "thumbnail": {
        //             "ext": ".jpeg",
        //             "url": "/uploads/thumbnail_interiit_0eb28ab357.jpeg",
        //             "hash": "thumbnail_interiit_0eb28ab357",
        //             "mime": "image/jpeg",
        //             "name": "thumbnail_interiit.jpeg",
        //             "path": null,
        //             "size": 3.09,
        //             "width": 156,
        //             "height": 156
        //           }
        //         },
        //         "hash": "interiit_0eb28ab357",
        //         "ext": ".jpeg",
        //         "mime": "image/jpeg",
        //         "size": 14.1,
        //         "url": "/uploads/interiit_0eb28ab357.jpeg",
        //         "previewUrl": null,
        //         "provider": "local",
        //         "provider_metadata": null,
        //         "folderPath": "/",
        //         "createdAt": "2023-02-22T21:08:27.304Z",
        //         "updatedAt": "2023-02-22T21:08:27.304Z"
        //       },
        //       {
        //         "id": 13,
        //         "name": "ath_slide1.jpg",
        //         "alternativeText": null,
        //         "caption": null,
        //         "width": 749,
        //         "height": 960,
        //         "formats": {
        //           "small": {
        //             "ext": ".jpg",
        //             "url": "/uploads/small_ath_slide1_7d8cd3b190.jpg",
        //             "hash": "small_ath_slide1_7d8cd3b190",
        //             "mime": "image/jpeg",
        //             "name": "small_ath_slide1.jpg",
        //             "path": null,
        //             "size": 52.22,
        //             "width": 390,
        //             "height": 500
        //           },
        //           "medium": {
        //             "ext": ".jpg",
        //             "url": "/uploads/medium_ath_slide1_7d8cd3b190.jpg",
        //             "hash": "medium_ath_slide1_7d8cd3b190",
        //             "mime": "image/jpeg",
        //             "name": "medium_ath_slide1.jpg",
        //             "path": null,
        //             "size": 98.41,
        //             "width": 585,
        //             "height": 750
        //           },
        //           "thumbnail": {
        //             "ext": ".jpg",
        //             "url": "/uploads/thumbnail_ath_slide1_7d8cd3b190.jpg",
        //             "hash": "thumbnail_ath_slide1_7d8cd3b190",
        //             "mime": "image/jpeg",
        //             "name": "thumbnail_ath_slide1.jpg",
        //             "path": null,
        //             "size": 7.7,
        //             "width": 122,
        //             "height": 156
        //           }
        //         },
        //         "hash": "ath_slide1_7d8cd3b190",
        //         "ext": ".jpg",
        //         "mime": "image/jpeg",
        //         "size": 118.74,
        //         "url": "/uploads/ath_slide1_7d8cd3b190.jpg",
        //         "previewUrl": null,
        //         "provider": "local",
        //         "provider_metadata": null,
        //         "folderPath": "/",
        //         "createdAt": "2023-03-04T18:29:20.387Z",
        //         "updatedAt": "2023-03-07T06:52:10.825Z"
        //       },
        //       {
        //         "id": 14,
        //         "name": "287723912_384416420385705_2640939001198222573_n.jpg",
        //         "alternativeText": null,
        //         "caption": null,
        //         "width": 2048,
        //         "height": 1505,
        //         "formats": {
        //           "large": {
        //             "ext": ".jpg",
        //             "url": "/uploads/large_287723912_384416420385705_2640939001198222573_n_0c30b721dc.jpg",
        //             "hash": "large_287723912_384416420385705_2640939001198222573_n_0c30b721dc",
        //             "mime": "image/jpeg",
        //             "name": "large_287723912_384416420385705_2640939001198222573_n.jpg",
        //             "path": null,
        //             "size": 141.23,
        //             "width": 1000,
        //             "height": 735
        //           },
        //           "small": {
        //             "ext": ".jpg",
        //             "url": "/uploads/small_287723912_384416420385705_2640939001198222573_n_0c30b721dc.jpg",
        //             "hash": "small_287723912_384416420385705_2640939001198222573_n_0c30b721dc",
        //             "mime": "image/jpeg",
        //             "name": "small_287723912_384416420385705_2640939001198222573_n.jpg",
        //             "path": null,
        //             "size": 41.14,
        //             "width": 500,
        //             "height": 367
        //           },
        //           "medium": {
        //             "ext": ".jpg",
        //             "url": "/uploads/medium_287723912_384416420385705_2640939001198222573_n_0c30b721dc.jpg",
        //             "hash": "medium_287723912_384416420385705_2640939001198222573_n_0c30b721dc",
        //             "mime": "image/jpeg",
        //             "name": "medium_287723912_384416420385705_2640939001198222573_n.jpg",
        //             "path": null,
        //             "size": 84.75,
        //             "width": 750,
        //             "height": 551
        //           },
        //           "thumbnail": {
        //             "ext": ".jpg",
        //             "url": "/uploads/thumbnail_287723912_384416420385705_2640939001198222573_n_0c30b721dc.jpg",
        //             "hash": "thumbnail_287723912_384416420385705_2640939001198222573_n_0c30b721dc",
        //             "mime": "image/jpeg",
        //             "name": "thumbnail_287723912_384416420385705_2640939001198222573_n.jpg",
        //             "path": null,
        //             "size": 9,
        //             "width": 212,
        //             "height": 156
        //           }
        //         },
        //         "hash": "287723912_384416420385705_2640939001198222573_n_0c30b721dc",
        //         "ext": ".jpg",
        //         "mime": "image/jpeg",
        //         "size": 469.24,
        //         "url": "/uploads/287723912_384416420385705_2640939001198222573_n_0c30b721dc.jpg",
        //         "previewUrl": null,
        //         "provider": "local",
        //         "provider_metadata": null,
        //         "folderPath": "/",
        //         "createdAt": "2023-03-05T19:30:11.712Z",
        //         "updatedAt": "2023-03-05T19:30:11.712Z"
        //       },
        //       {
        //         "id": 6,
        //         "name": "bb_slide3.jpg",
        //         "alternativeText": null,
        //         "caption": null,
        //         "width": 1200,
        //         "height": 794,
        //         "formats": {
        //           "large": {
        //             "ext": ".jpg",
        //             "url": "/uploads/large_bb_slide3_5a14b80658.jpg",
        //             "hash": "large_bb_slide3_5a14b80658",
        //             "mime": "image/jpeg",
        //             "name": "large_bb_slide3.jpg",
        //             "path": null,
        //             "size": 63.88,
        //             "width": 1000,
        //             "height": 662
        //           },
        //           "small": {
        //             "ext": ".jpg",
        //             "url": "/uploads/small_bb_slide3_5a14b80658.jpg",
        //             "hash": "small_bb_slide3_5a14b80658",
        //             "mime": "image/jpeg",
        //             "name": "small_bb_slide3.jpg",
        //             "path": null,
        //             "size": 22.23,
        //             "width": 500,
        //             "height": 331
        //           },
        //           "medium": {
        //             "ext": ".jpg",
        //             "url": "/uploads/medium_bb_slide3_5a14b80658.jpg",
        //             "hash": "medium_bb_slide3_5a14b80658",
        //             "mime": "image/jpeg",
        //             "name": "medium_bb_slide3.jpg",
        //             "path": null,
        //             "size": 40.4,
        //             "width": 750,
        //             "height": 496
        //           },
        //           "thumbnail": {
        //             "ext": ".jpg",
        //             "url": "/uploads/thumbnail_bb_slide3_5a14b80658.jpg",
        //             "hash": "thumbnail_bb_slide3_5a14b80658",
        //             "mime": "image/jpeg",
        //             "name": "thumbnail_bb_slide3.jpg",
        //             "path": null,
        //             "size": 7.6,
        //             "width": 236,
        //             "height": 156
        //           }
        //         },
        //         "hash": "bb_slide3_5a14b80658",
        //         "ext": ".jpg",
        //         "mime": "image/jpeg",
        //         "size": 86.72,
        //         "url": "/uploads/bb_slide3_5a14b80658.jpg",
        //         "previewUrl": null,
        //         "provider": "local",
        //         "provider_metadata": null,
        //         "folderPath": "/",
        //         "createdAt": "2023-02-22T20:56:48.907Z",
        //         "updatedAt": "2023-03-04T14:34:09.197Z"
        //       },
        //       {
        //         "id": 11,
        //         "name": "spirit.jpg",
        //         "alternativeText": null,
        //         "caption": null,
        //         "width": 534,
        //         "height": 960,
        //         "formats": {
        //           "small": {
        //             "ext": ".jpg",
        //             "url": "/uploads/small_spirit_90522ace8a.jpg",
        //             "hash": "small_spirit_90522ace8a",
        //             "mime": "image/jpeg",
        //             "name": "small_spirit.jpg",
        //             "path": null,
        //             "size": 18.86,
        //             "width": 278,
        //             "height": 500
        //           },
        //           "medium": {
        //             "ext": ".jpg",
        //             "url": "/uploads/medium_spirit_90522ace8a.jpg",
        //             "hash": "medium_spirit_90522ace8a",
        //             "mime": "image/jpeg",
        //             "name": "medium_spirit.jpg",
        //             "path": null,
        //             "size": 33.58,
        //             "width": 417,
        //             "height": 750
        //           },
        //           "thumbnail": {
        //             "ext": ".jpg",
        //             "url": "/uploads/thumbnail_spirit_90522ace8a.jpg",
        //             "hash": "thumbnail_spirit_90522ace8a",
        //             "mime": "image/jpeg",
        //             "name": "thumbnail_spirit.jpg",
        //             "path": null,
        //             "size": 3.39,
        //             "width": 86,
        //             "height": 156
        //           }
        //         },
        //         "hash": "spirit_90522ace8a",
        //         "ext": ".jpg",
        //         "mime": "image/jpeg",
        //         "size": 40.82,
        //         "url": "/uploads/spirit_90522ace8a.jpg",
        //         "previewUrl": null,
        //         "provider": "local",
        //         "provider_metadata": null,
        //         "folderPath": "/",
        //         "createdAt": "2023-02-22T21:06:36.742Z",
        //         "updatedAt": "2023-03-04T14:33:48.361Z"
        //       },
        //       {
        //         "id": 8,
        //         "name": "cricket_slide1.jpg",
        //         "alternativeText": null,
        //         "caption": null,
        //         "width": 1200,
        //         "height": 800,
        //         "formats": {
        //           "large": {
        //             "ext": ".jpg",
        //             "url": "/uploads/large_cricket_slide1_b3000a56cd.jpg",
        //             "hash": "large_cricket_slide1_b3000a56cd",
        //             "mime": "image/jpeg",
        //             "name": "large_cricket_slide1.jpg",
        //             "path": null,
        //             "size": 130.81,
        //             "width": 1000,
        //             "height": 667
        //           },
        //           "small": {
        //             "ext": ".jpg",
        //             "url": "/uploads/small_cricket_slide1_b3000a56cd.jpg",
        //             "hash": "small_cricket_slide1_b3000a56cd",
        //             "mime": "image/jpeg",
        //             "name": "small_cricket_slide1.jpg",
        //             "path": null,
        //             "size": 36.35,
        //             "width": 500,
        //             "height": 333
        //           },
        //           "medium": {
        //             "ext": ".jpg",
        //             "url": "/uploads/medium_cricket_slide1_b3000a56cd.jpg",
        //             "hash": "medium_cricket_slide1_b3000a56cd",
        //             "mime": "image/jpeg",
        //             "name": "medium_cricket_slide1.jpg",
        //             "path": null,
        //             "size": 77.24,
        //             "width": 750,
        //             "height": 500
        //           },
        //           "thumbnail": {
        //             "ext": ".jpg",
        //             "url": "/uploads/thumbnail_cricket_slide1_b3000a56cd.jpg",
        //             "hash": "thumbnail_cricket_slide1_b3000a56cd",
        //             "mime": "image/jpeg",
        //             "name": "thumbnail_cricket_slide1.jpg",
        //             "path": null,
        //             "size": 8.93,
        //             "width": 234,
        //             "height": 156
        //           }
        //         },
        //         "hash": "cricket_slide1_b3000a56cd",
        //         "ext": ".jpg",
        //         "mime": "image/jpeg",
        //         "size": 185.97,
        //         "url": "/uploads/cricket_slide1_b3000a56cd.jpg",
        //         "previewUrl": null,
        //         "provider": "local",
        //         "provider_metadata": null,
        //         "folderPath": "/",
        //         "createdAt": "2023-02-22T21:00:56.107Z",
        //         "updatedAt": "2023-02-22T21:00:56.107Z"
        //       },
        //       {
        //         "id": 9,
        //         "name": "deepak_sports.jpg",
        //         "alternativeText": null,
        //         "caption": null,
        //         "width": 450,
        //         "height": 675,
        //         "formats": {
        //           "small": {
        //             "ext": ".jpg",
        //             "url": "/uploads/small_deepak_sports_d04700be7e.jpg",
        //             "hash": "small_deepak_sports_d04700be7e",
        //             "mime": "image/jpeg",
        //             "name": "small_deepak_sports.jpg",
        //             "path": null,
        //             "size": 21.2,
        //             "width": 333,
        //             "height": 500
        //           },
        //           "thumbnail": {
        //             "ext": ".jpg",
        //             "url": "/uploads/thumbnail_deepak_sports_d04700be7e.jpg",
        //             "hash": "thumbnail_deepak_sports_d04700be7e",
        //             "mime": "image/jpeg",
        //             "name": "thumbnail_deepak_sports.jpg",
        //             "path": null,
        //             "size": 3.67,
        //             "width": 104,
        //             "height": 156
        //           }
        //         },
        //         "hash": "deepak_sports_d04700be7e",
        //         "ext": ".jpg",
        //         "mime": "image/jpeg",
        //         "size": 35.27,
        //         "url": "/uploads/deepak_sports_d04700be7e.jpg",
        //         "previewUrl": null,
        //         "provider": "local",
        //         "provider_metadata": null,
        //         "folderPath": "/",
        //         "createdAt": "2023-02-22T21:02:53.111Z",
        //         "updatedAt": "2023-02-22T21:02:53.111Z"
        //       }
        //     ]
        //   },
        // ],
        // "Event": [
        //   {
        //     "id": 1,
        //     "Event_Num": "1",
        //     "Event_Name": "Spardha",
        //     "Event_Image": {
        //       "id": 3,
        //       "name": "Group 97.png",
        //       "alternativeText": null,
        //       "caption": null,
        //       "width": 347,
        //       "height": 399,
        //       "formats": {
        //         "thumbnail": {
        //           "ext": ".png",
        //           "url": "/uploads/thumbnail_Group_97_ccb45c9d64.png",
        //           "hash": "thumbnail_Group_97_ccb45c9d64",
        //           "mime": "image/png",
        //           "name": "thumbnail_Group 97.png",
        //           "path": null,
        //           "size": 61.17,
        //           "width": 136,
        //           "height": 156
        //         }
        //       },
        //       "hash": "Group_97_ccb45c9d64",
        //       "ext": ".png",
        //       "mime": "image/png",
        //       "size": 249.17,
        //       "url": "/uploads/Group_97_ccb45c9d64.png",
        //       "previewUrl": null,
        //       "provider": "local",
        //       "provider_metadata": null,
        //       "folderPath": "/",
        //       "createdAt": "2023-02-22T19:56:03.676Z",
        //       "updatedAt": "2023-02-22T19:56:03.676Z"
        //     }
        //   },
        // ],
        // "carousel": [
        //   {
        //     "id": 13,
        //     "name": "ath_slide1.jpg",
        //     "alternativeText": null,
        //     "caption": null,
        //     "width": 749,
        //     "height": 960,
        //     "formats": {
        //       "small": {
        //         "ext": ".jpg",
        //         "url": "/uploads/small_ath_slide1_7d8cd3b190.jpg",
        //         "hash": "small_ath_slide1_7d8cd3b190",
        //         "mime": "image/jpeg",
        //         "name": "small_ath_slide1.jpg",
        //         "path": null,
        //         "size": 52.22,
        //         "width": 390,
        //         "height": 500
        //       },
        //       "medium": {
        //         "ext": ".jpg",
        //         "url": "/uploads/medium_ath_slide1_7d8cd3b190.jpg",
        //         "hash": "medium_ath_slide1_7d8cd3b190",
        //         "mime": "image/jpeg",
        //         "name": "medium_ath_slide1.jpg",
        //         "path": null,
        //         "size": 98.41,
        //         "width": 585,
        //         "height": 750
        //       },
        //       "thumbnail": {
        //         "ext": ".jpg",
        //         "url": "/uploads/thumbnail_ath_slide1_7d8cd3b190.jpg",
        //         "hash": "thumbnail_ath_slide1_7d8cd3b190",
        //         "mime": "image/jpeg",
        //         "name": "thumbnail_ath_slide1.jpg",
        //         "path": null,
        //         "size": 7.7,
        //         "width": 122,
        //         "height": 156
        //       }
        //     },
        //     "hash": "ath_slide1_7d8cd3b190",
        //     "ext": ".jpg",
        //     "mime": "image/jpeg",
        //     "size": 118.74,
        //     "url": "/uploads/ath_slide1_7d8cd3b190.jpg",
        //     "previewUrl": null,
        //     "provider": "local",
        //     "provider_metadata": null,
        //     "folderPath": "/",
        //     "createdAt": "2023-03-04T18:29:20.387Z",
        //     "updatedAt": "2023-03-07T06:52:10.825Z"
        //   },
        // ]
      });
    const [isLoaded, setLoad] = useState(false);

    useEffect(() => {
         fetchHomePageData()
            .then((res) => { setData(res.data); setLoad(true) })
            .catch(setLoad(false))
    }, []) 
    console.log(data)
   return (
        <div>
            <Navbar 
                name = {data.HomePage_Heading}
                slogan = {data.HomePage_Slogan}
                carousel ={data.carousel}
            />
            <HomeEvents></HomeEvents>
            {data.Media_Component.map((item,index) =>{
            return <MediaComponent name={item.Component_name} desc={item.Media_Description} media={item.Images} />
            })}
            <Footer></Footer>

        </div>
    );  
}
export default HomeScreen;
