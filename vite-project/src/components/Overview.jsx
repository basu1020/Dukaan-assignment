import { Flex, Text, Button, DropdownMenu } from '@radix-ui/themes'
import { CaretDownIcon } from '@radix-ui/react-icons'
import React from 'react'
import TransactionSection from './Transaction'

const Overview = () => {
    return (
        <>
            <Flex direction="column" p="2" className='bg-gray-100 h-[95vh]'>
                <Flex direction="row" justify="between" px="4" py={"2"}>
                    <Text size="4" weight="medium">Overview</Text>
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button variant='outline'>
                                Last Month
                                <CaretDownIcon />
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <DropdownMenu.Item>Previous Month</DropdownMenu.Item>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Item>Next Month</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </Flex>
                <div className="flex flex-row justify-center align-middle w-full h-auto p-3">
                    <div className="flex flex-col justify-center align-middle p-2 w-[50%] me-2 bg-white rounded-md">
                        <Text weight={"regular"} m={"2"}>Online orders</Text>
                        <Text size={"7"} weight={"bold"} m={"2"}>231</Text>
                    </div>
                    <div className="flex flex-col justify-center align-middle p-2 w-[50%] ms-2 bg-white rounded-md">
                        <Text weight={"regular"} m={"2"}>Amount received</Text>
                        <Text size={"7"} weight={"bold"} m={"2"}>₹23,92,312.19</Text>
                    </div>
                </div>

                <TransactionSection />
            </Flex>
        </>
    )
}

export default Overview