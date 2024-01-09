import React from 'react'
import { Flex, Text, Button, DropdownMenu, TextField, Table, ScrollArea, IconButton } from '@radix-ui/themes'
import { MagnifyingGlassIcon, DownloadIcon, CaretSortIcon, TrackPreviousIcon, TrackNextIcon, DoubleArrowRightIcon, DoubleArrowLeftIcon } from '@radix-ui/react-icons'

const TransactionSection = () => {
    const numberOfRows = Array.from({ length: 19 });

    return (
        <>
            <div className="flex flex-col justify-center align-middle w-full p-4 ">
                <div className="flex flex-row justify-start align-middle my-3">
                    <Text weight={"medium"} size={"4"}>Transaction | This Month</Text>
                </div>
                <div className="flex flex-col justify-center align-middle bg-white rounded-lg p-2">
                    <div className="flex flex-row justify-between align-middle">
                        {/* search bar */}
                        <TextField.Root className='rounded-md'>
                            <TextField.Slot>
                                <MagnifyingGlassIcon height="16" width="16" />
                            </TextField.Slot>
                            <TextField.Input placeholder="Search by order id" />
                        </TextField.Root>

                        {/* Sort and download button */}
                        <Flex direction={"row"}>
                            <Button mx={"1"} variant='outline'> Sort <CaretSortIcon /> </Button>
                            <Button mx={"1"} variant='outline'> <DownloadIcon /> </Button>
                        </Flex>

                    </div>
                    <ScrollArea type='scroll' scrollbars="vertical" style={{ height: "57vh", width: "" }}>
                        <Table.Root variant="surface" mt={"2"} style={{ width: "100%", borderRadius: "2px" }}>
                            <Table.Header className='my-2'>
                                <Table.Row>
                                    <Table.ColumnHeaderCell justify={"start"}>Order ID</Table.ColumnHeaderCell>
                                    <Table.ColumnHeaderCell>Order date</Table.ColumnHeaderCell>
                                    <Table.ColumnHeaderCell justify={"center"}>Order amount</Table.ColumnHeaderCell>
                                    <Table.ColumnHeaderCell justify={"end"}>Transaction Fees</Table.ColumnHeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {numberOfRows.map((_, index) => (
                                    <Table.Row key={index}>
                                        <Table.RowHeaderCell>#{index + 1}</Table.RowHeaderCell>
                                        <Table.Cell>7 July 2023</Table.Cell>
                                        <Table.Cell justify={"center"}>₹1,278.23</Table.Cell>
                                        <Table.Cell justify={"end"}>₹22</Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table.Root>
                    </ScrollArea>
                    <Flex direction={"row"} justify={"center"} align={"center"} p={"1"} my="3">
                        <Button variant='outline' mx={"3"}> <DoubleArrowLeftIcon /> Previous </Button>
                        <IconButton color='indigo'>1</IconButton>
                        <IconButton variant='ghost' mx={"3"}>10</IconButton>
                        <IconButton variant='ghost' mx={"3"}>...</IconButton>
                        <IconButton variant='ghost' mx={"3"}>11</IconButton>
                        <IconButton variant='ghost' mx={"3"}>12</IconButton>
                        <IconButton variant='ghost' mx={"3"}>13</IconButton>
                        <IconButton variant='ghost' mx={"3"}>14</IconButton>
                        <IconButton variant='ghost' mx={"3"}>15</IconButton>
                        <Button variant='outline' mx={"3"}> Next <DoubleArrowRightIcon /></Button>
                    </Flex>
                </div>
            </div>
        </>
    )
}

export default TransactionSection