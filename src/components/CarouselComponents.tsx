'use clients';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

import Image from 'next/image';

import React from 'react';

const CarouselComponents = () => {
    return (
        <div className="w-full h-full">
            <Carousel>
                <CarouselContent>
                    <CarouselItem>
                        <Image
                            src="https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt={'images'}
                            width={1080}
                            height={800}
                            objectFit="cover"
                            className="mx-auto"
                        />
                    </CarouselItem>
                    <CarouselItem>...</CarouselItem>
                    <CarouselItem>...</CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default CarouselComponents;
