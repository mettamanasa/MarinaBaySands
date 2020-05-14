import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class RoomService {
    room = {};
    selectedRoomId = '';
    constructor(private httpClient: HttpClient) {
        this.room = {
            "data": [
                {
                    "roomId": "DLXR",
                    "roomName": "Deluxe Room",
                    "roomPrice": "709",
                    "roomDesc": "The Deluxe Room welcomes you with modern conveniences and elegant décor so you can get started on your dream escape.",
                    "roomAmen": [
                        {
                            "amenIcons": "assets/Images/Icons/area.jpg",
                            "amenDesc": "39sqm"
                        },
                        {
                            "amenIcons": "assets/Images/Icons/pool.jpg",
                            "amenDesc": "Access to Sands Skypark & infinity pool"
                        }
                    ],
                    "roomCarousal": [
                        "assets/Images/Rooms/Deluxe/Deluxe.jpg",
                        "assets/Images/Rooms/Deluxe/deluxe-1_1920x960.jpg",
                        "assets/Images/Rooms/Deluxe/deluxe-2_1920x960.jpg",
                        "assets/Images/Rooms/Deluxe/deluxe-3_1920x960.jpg",
                        "assets/Images/Rooms/Deluxe/deluxe-4_1920x960.jpg"
                    ]
                },
                {
                    "roomId": "PRMR",
                    "roomName": "Premier Room",
                    "roomPrice": "459",
                    "roomDesc": "Relax and invigorate your body in the contemporary comforts of the Premier Room, complete with a luxurious deep-soaking bathtub.",
                    "roomAmen": [
                        {
                            "amenIcons": "assets/Images/Icons/area.jpg",
                            "amenDesc": "47sqm"
                        },
                        {
                            "amenIcons": "assets/Images/Icons/pool.jpg",
                            "amenDesc": "Bathtub"
                        }
                    ],
                    "addonAmen": "+All amenities from lower tier rooms",
                    "roomCarousal": [
                        "assets/Images/Rooms/Premiere/premier.jpg",
                        "assets/Images/Rooms/Premiere/premiere 1_1920x960.jpg",
                        "assets/Images/Rooms/Premiere/premiere 2_1920x960.jpg",
                        "assets/Images/Rooms/Premiere/premiere 3_1920x960.jpg",
                        "assets/Images/Rooms/Premiere/premiere 5_1920x960.jpg"
                    ]
                },
                {
                    "roomId": "FMLR",
                    "roomName": "Family Room",
                    "roomPrice": "679",
                    "roomDesc": "A perfect sanctuary for your loved ones, our Family Room comes with a fully furnished balcony for open-air feasts amidst lush garden views.",
                    "roomAmen": [
                        {
                            "amenIcons": "assets/Images/Icons/area.jpg",
                            "amenDesc": "86sqm"
                        },
                        {
                            "amenIcons": "assets/Images/Icons/washroom.jpg",
                            "amenDesc": "Additional toilet"
                        },
                        {
                            "amenIcons": "assets/Images/Icons/balcony.jpg",
                            "amenDesc": "Furnished balcony"
                        },
                        {
                            "amenIcons": "assets/Images/Icons/nespresso.jpg",
                            "amenDesc": "Nespresso machine"
                        }
                    ],
                    "addonAmen": "+All amenities from lower tier rooms",
                    "roomCarousal": [
                        "assets/Images/Rooms/Family/family.jpg",
                        "assets/Images/Rooms/Family/club-room 2-_1920x960.jpg",
                        "assets/Images/Rooms/Family/club-room 1-_1920x960.jpg",
                        "assets/Images/Rooms/Family/club-room 3-_1920x960.jpg"
                    ]
                }
            ],

            "roomData": [
                {
                    "roomId": "DLXR",
                    "roomName": "Deluxe Room",
                    "roomPrice": "S$709",
                    "roomDesc": "The Deluxe Room welcomes you with modern conveniences and elegant décor so you can get started on your dream escape.",
                    "roomImg": "assets/Images/Rooms/Deluxe/deluxe-1_1920x960.jpg",
                    "roomCarousal": [
                        "assets/Images/Rooms/Deluxe/deluxe-1_1920x960.jpg",
                        "assets/Images/Rooms/Deluxe/deluxe-2_1920x960.jpg",
                        "assets/Images/Rooms/Deluxe/deluxe-3_1920x960.jpg",
                        "assets/Images/Rooms/Deluxe/deluxe-4_1920x960.jpg"
                    ],
                    "bedType": [
                        {
                            "bedName": "King Size Bed",
                            "bedImg": "assets/Images/Rooms/Bed Type/King.png"
                        },
                        {
                            "bedName": "Twin Bed",
                            "bedImg": "assets/Images/Rooms/Bed Type/Two twin.png"
                        }
                    ],
                    "roomViews": [
                        {
                            "viewName": "City View",
                            "viewImg": "assets/Images/Rooms/views/city.jpg"
                        },
                        {
                            "viewName": "Garden View",
                            "viewImg": "assets/Images/Rooms/views/garden.jpg"
                        },
                        {
                            "viewName": "Harbour View",
                            "viewImg": "assets/Images/Rooms/views/harbour.jpg"
                        },
                        {
                            "viewName": "Sky View",
                            "viewImg": "assets/Images/Rooms/views/skyview.jpg"
                        }
                    ],
                    "roomPackage": [
                        {
                            "packImg": "assets/Images/Rooms/Package/cq5dam.thumbnail.319.319 (1).png",
                            "packName": "Bed & Breakfast",
                            "packDesc": [
                                "Delicious breakfast at RISE, Adrift or Spago",
                                "Entry to award-winning Banyan Tree Fitness Club"
                            ],
                            "packCost": "S$512"
                        },
                        {
                            "packImg": "assets/Images/Rooms/Package/cq5dam.thumbnail.319.319 (2).png",
                            "packName": "Marina Bay Sands Vacation",
                            "packDesc": [
                                "Guaranteed savings of S$40 per night compared to other travel sites"
                            ],
                            "packCost": "S$492"
                        },
                        {
                            "packImg": "assets/Images/Rooms/Package/cq5dam.thumbnail.319.319.png",
                            "packName": "Book Direct & Save ",
                            "packDesc": [
                                "S$20 lower than other online travel sites.",
                                "No booking fee and no prepayment required"
                            ],
                            "packCost": "S$472"
                        }
                    ],
                    "finalCost": "",
                    "roomAmen": [
                        {
                            "amenIcons": "assets/Images/Icons/area.jpg",
                            "amenDescribe": [
                                "39 square metres",
                                " 1 King or 2 Single beds"
                            ],
                            "amenName": "ROOM DETAILS"
                        },
                        {
                            "amenIcons": "assets/Images/Icons/bathtub.jpg",
                            "amenDescribe": [
                                "Bathroom with glass-enclosed shower",
                                "Luxury bathroom amenties",
                                "Microfibre and terry bathrobes",
                                "Hairdryer"
                            ],
                            "amenName": "BATH FEATURES"
                        },
                        {
                            "amenIcons": "assets/Images/Icons/balcony.jpg",
                            "amenDescribe": [
                                "24 hour in-room dining service",
                                "Complimentary Wi-Fi and wired Internet access",
                                "Sands Sky Park Infinity Pool",
                                "Entry to award-winning Banyan Tree Fitness Club"
                            ],
                            "amenName": "ACCESS PRIVILEGES"
                        },
                        {
                            "amenIcons": "assets/Images/Icons/nespresso.jpg",
                            "amenDescribe": [
                                "42\" interactive flatscreen TV",
                                "Cable channels(free) and movies on demand",
                                "(charges apply)",
                                "Executive work desk",
                                "In-room safe",
                                "In-room safe",
                                "Shoe brush and shoe horn",
                                "A balcony is featured with some Deluxe Rooms"
                            ],
                            "amenName": "ADDITIONAL INFORMATION"
                        }
                    ]
                },
                {
                    "roomId": "PRMR",
                    "roomName": "Premier Room",
                    "roomPrice": "S$459",
                    "roomDesc": "Relax and invigorate your body in the contemporary comforts of the Premier Room, complete with a luxurious deep-soaking bathtub.",
                    "roomCarousal": [
                        "assets/Images/Rooms/Premiere/premiere 1_1920x960.jpg",
                        "assets/Images/Rooms/Premiere/premiere 2_1920x960.jpg",
                        "assets/Images/Rooms/Premiere/premiere 3_1920x960.jpg",
                        "assets/Images/Rooms/Premiere/premiere 5_1920x960.jpg"
                    ],
                    "roomImg": "assets/Images/Rooms/Premiere/premier.jpg",
                    "bedType": [
                        {
                            "bedName": "King Size Bed",
                            "bedImg": "assets/Images/Rooms/Bed Type/King.png"
                        },
                        {
                            "bedName": "Twin Bed",
                            "bedImg": "assets/Images/Rooms/Bed Type/Two twin.png"
                        },
                        {
                            "bedName": "King Twin Bed",
                            "bedImg": "assets/Images/Rooms/Bed Type/King with twin.png"
                        }
                    ],
                    "roomViews": [
                        {
                            "viewName": "City View",
                            "viewImg": "assets/Images/Rooms/views/city.jpg"
                        },
                        {
                            "viewName": "Garden View",
                            "viewImg": "assets/Images/Rooms/views/garden.jpg"
                        },
                        {
                            "viewName": "Harbour View",
                            "viewImg": "assets/Images/Rooms/views/harbour.jpg"
                        },
                        {
                            "viewName": "Sky View",
                            "viewImg": "assets/Images/Rooms/views/skyview.jpg"
                        }
                    ],
                    "roomPackage": [
                        {
                            "packImg": "assets/Images/Rooms/Package/cq5dam.thumbnail.319.319 (1).png",
                            "packName": "Bed & Breakfast",
                            "packDesc": [
                                "Delicious breakfast at RISE, Adrift or Spago",
                                "Entry to award-winning Banyan Tree Fitness Club"
                            ],
                            "packCost": "S$512"
                        },
                        {
                            "packImg": "assets/Images/Rooms/Package/cq5dam.thumbnail.319.319 (2).png",
                            "packName": "Marina Bay Sands Vacation",
                            "packDesc": [
                                "Guaranteed savings of S$40 per night compared to other travel sites"
                            ],
                            "packCost": "S$492"
                        },
                        {
                            "packImg": "assets/Images/Rooms/Package/cq5dam.thumbnail.319.319.png",
                            "packName": "Book Direct & Save ",
                            "packDesc": [
                                "S$20 lower than other online travel sites.",
                                "No booking fee and no prepayment required"
                            ],
                            "packCost": "S$472"
                        }
                    ],
                    "finalCost": "",
                    "roomAmen": [
                        {
                            "amenIcons": "assets/Images/Icons/area.jpg",
                            "amenDescribe": [
                                "39 square metres",
                                " 1 King or 2 Single beds"
                            ],
                            "amenName": "ROOM DETAILS"
                        },
                        {
                            "amenIcons": "assets/Images/Icons/bathtub.jpg",
                            "amenDescribe": [
                                "Bathroom with glass-enclosed shower",
                                "Luxury bathroom amenties",
                                "Microfibre and terry bathrobes",
                                "Hairdryer"
                            ],
                            "amenName": "BATH FEATURES"
                        },
                        {
                            "amenIcons": "assets/Images/Icons/balcony.jpg",
                            "amenDescribe": [
                                "24 hour in-room dining service",
                                "Complimentary Wi-Fi and wired Internet access",
                                "Sands Sky Park Infinity Pool",
                                "Entry to award-winning Banyan Tree Fitness Club"
                            ],
                            "amenName": "ACCESS PRIVILEGES"
                        },
                        {
                            "amenIcons": "assets/Images/Icons/pool.jpg",
                            "amenDescribe": [
                                "42\" interactive flatscreen TV",
                                "Cable channels(free) and movies on demand",
                                "(charges apply)",
                                "Executive work desk",
                                "In-room safe",
                                "In-room safe",
                                "Shoe brush and shoe horn",
                                "A balcony is featured with some Deluxe Rooms"
                            ],
                            "amenName": "ADDITIONAL INFORMATION"
                        }
                    ]
                },
                {
                    "roomId": "FMLR",
                    "roomName": "Family Room",
                    "roomPrice": "S$679",
                    "roomDesc": "A perfect sanctuary for your loved ones, our Family Room comes with a fully furnished balcony for open-air feasts amidst lush garden views.",
                    "roomImg": "assets/Images/Rooms/Family/club-room 1-_1920x960.jpg",
                    "roomCarousal": [
                        "assets/Images/Rooms/Family/club-room 1-_1920x960.jpg",
                        "assets/Images/Rooms/Family/club-room 2-_1920x960.jpg",
                        "assets/Images/Rooms/Family/club-room 3-_1920x960.jpg",
                        "assets/Images/Rooms/Family/clubb55-amenities-2_500x200.jpg"
                    ],
                    "bedType": [
                        {
                            "bedName": "King Size Bed",
                            "bedImg": "assets/Images/Rooms/Bed Type/King.png"
                        },
                        {
                            "bedName": "Twin Bed",
                            "bedImg": "assets/Images/Rooms/Bed Type/kingTwin.png"
                        }
                    ],
                    "roomViews": [
                        {
                            "viewName": "City View",
                            "viewImg": "assets/Images/Rooms/views/city.jpg"
                        },
                        {
                            "viewName": "Garden View",
                            "viewImg": "assets/Images/Rooms/views/garden.jpg"
                        },
                        {
                            "viewName": "Harbour View",
                            "viewImg": "assets/Images/Rooms/views/harbour.jpg"
                        },
                        {
                            "viewName": "Sky View",
                            "viewImg": "assets/Images/Rooms/views/skyview.jpg"
                        }
                    ],
                    "roomPackage": [
                        {
                            "packImg": "assets/Images/Rooms/Package/cq5dam.thumbnail.319.319 (1).png",
                            "packName": "Bed & Breakfast",
                            "packDesc": [
                                "Delicious breakfast at RISE, Adrift or Spago",
                                "Entry to award-winning Banyan Tree Fitness Club"
                            ],
                            "packCost": "S$512"
                        },
                        {
                            "packImg": "assets/Images/Rooms/Package/cq5dam.thumbnail.319.319 (2).png",
                            "packName": "Marina Bay Sands Vacation",
                            "packDesc": [
                                "Guaranteed savings of S$40 per night compared to other travel sites"
                            ],
                            "packCost": "S$492"
                        },
                        {
                            "packImg": "assets/Images/Rooms/Package/cq5dam.thumbnail.319.319.png",
                            "packName": "Book Direct & Save ",
                            "packDesc": [
                                "S$20 lower than other online travel sites.",
                                "No booking fee and no prepayment required"
                            ],
                            "packCost": "S$472"
                        }
                    ],
                    "finalCost": "",
                    "roomAmen": [
                        {
                            "amenIcons": "assets/Images/Icons/area.jpg",
                            "amenDescribe": [
                                "39 square metres",
                                " 1 King or 2 Single beds"
                            ],
                            "amenName": "ROOM DETAILS"
                        },
                        {
                            "amenIcons": "assets/Images/Icons/nespresso.jpg",
                            "amenDescribe": [
                                "Bathroom with glass-enclosed shower",
                                "Luxury bathroom amenties",
                                "Microfibre and terry bathrobes",
                                "Hairdryer"
                            ],
                            "amenName": "BATH FEATURES"
                        },
                        {
                            "amenIcons": "assets/Images/Icons/email.jpg",
                            "amenDescribe": [
                                "24 hour in-room dining service",
                                "Complimentary Wi-Fi and wired Internet access",
                                "Sands Sky Park Infinity Pool",
                                "Entry to award-winning Banyan Tree Fitness Club"
                            ],
                            "amenName": "ACCESS PRIVILEGES"
                        },
                        {
                            "amenIcons": "assets/Images/Icons/balcony.jpg",
                            "amenDescribe": [
                                "42\" interactive flatscreen TV",
                                "Cable channels(free) and movies on demand",
                                "(charges apply)",
                                "Executive work desk",
                                "In-room safe",
                                "Shoe brush and shoe horn",
                                "A balcony is featured with some Deluxe Rooms"
                            ],
                            "amenName": "ADDITIONAL INFORMATION"
                        }
                    ]
                }
            ]
        }
    }
    // storeRoomDetails() {
    //     return this.http.put("https://marina-bay-sands-f3d3e.firebaseio.com/room-list.json",this.room);
    // }
    getRoomListData() {
        return this.httpClient.get("https://marina-bay-sands-f3d3e.firebaseio.com/room-list.json").pipe(
            map((res: any) => {
                return res;
            }
            )
        )
    }
    roomId(id) {
        this.selectedRoomId = id;
    }
}
