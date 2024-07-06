"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import axios from 'axios'
import { useToast } from "@/components/ui/use-toast"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { Check, ChevronDown, ChevronsDown, Loader2 } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { cn } from "@/lib/utils"
import { CommandEmpty, CommandGroup, CommandInput, CommandItem, Command } from "./ui/command"


const activity = [
    { label: "Acounting & Auditing", value: "Acounting & Auditing" },
    { label: "Advertising", value: "Advertising" },
    { label: "Automobile Trading", value: "Automobile Trading" },
    { label: "Aviation Consultancy", value: "Aviation Consultancy" },
    { label: "Buisness Consultancy", value: "Buisness Consultancy" },
    { label: "Cleaning Services", value: "Cleaning Services" },
    { label: "Creative Arts & Entertainment Activities", value: "Creative Arts & Entertainment Activities" },
    { label: "Delivery Services", value: "Delivery Services" },
    { label: "Digital Marketing", value: "Digital Marketing" },
    { label: "E-commerce", value: "E-commerce" },
    { label: "Educational Support Activities", value: "Educational Support Activities" },
    { label: "Engineering Consultancy", value: "Engineering Consultancy" },
    { label: "Event Management", value: "Event Management" },
    { label: "Food Trading", value: "Food Trading" },
    { label: "General Trading", value: "General Trading" },
    { label: "Holding Company", value: "Holding Company" },
    { label: "Hospitality Management", value: "Hospitality Management" },
    { label: "HR Consultancy", value: "HR Consultancy" },
    { label: "Interior Design", value: "Interior Design" },
    { label: "Investment Consultancy", value: "Investment Consultancy" },
    { label: "IT Consultancy", value: "IT Consultancy" },
    { label: "IT Trading", value: "IT Trading" },
    { label: "Jwellery Trading", value: "Jwellery Trading" },
    { label: "Legal Consultancy", value: "Legal Consultancy" },
    { label: "Maintenance", value: "Maintenance" },
    { label: "Management Consultancy", value: "Management Consultancy" },
    { label: "Media", value: "Media" },
    { label: "Perfumes & Cosmetics Trading", value: "Perfumes & Cosmetics Trading" },
    { label: "Photography", value: "Photography" },
    { label: "PR", value: "PR" },
    { label: "Project Management", value: "Project Management" },
    { label: "Raw Materials Trading", value: "Raw Materials Trading" },
    { label: "Real Estate", value: "Real Estate" },
    { label: "Restaurant, Cafe, Cloud Kitchen", value: "Restaurant, Cafe, Cloud Kitchen" },
    { label: "Retail Outlet/Shop", value: "Retail Outlet/Shop" },
    { label: "Salon", value: "Salon" },
    { label: "Software Publishing", value: "Software Publishing" },
    { label: "Sports Management", value: "Sports Management" },
    { label: "Technical Consultancy", value: "Technical Consultancy" },
    { label: "Technical Services", value: "Technical Services" },
    { label: "Textile Trading", value: "Textile Trading" },
    { label: "Tourism & Recreation", value: "Tourism & Recreation" },
    { label: "Videography", value: "Videography" },
] as const
const premises = [    
    { label: "Virtual Office", value: "Virtual Office" },
    { label: "Warehouse", value: "Warehouse" },
    { label: "Buisness Centre", value: "Buisness Centre" },
    { label: "Physical Office", value: "Physical Office" },
    { label: "Shop Front", value: "Shop Front" },
    ] as const
const formSchema = z.object({
    name: z.string().min(1, {
        message: "Name can not be empty.",
    }),
    phone: z.string().min(1, { message: "Phone can not be empty." }).refine((value) => /^[0-9]+$/.test(value), {
        message: "Please enter a valid phone number with only numbers.",
    }),
    email: z.string().min(1, { message: "Email can not be empty." }),
    company: z.string().min(1, { message: "Company can not be empty." }),
    service: z.string(),
    message: z.string().optional(),
    businessActivity: z.string({
        required_error: "Please select a business activity.",
    }),
    premises: z.string({
        required_error: "Please select a business activity.",
    }),
    numberOfOwners: z.string().min(1, { message: "number of owners can not be empty." }).refine((value) => /^[0-9]+$/.test(value), {
        message: "Please enter a valid numbers with only numbers.",
    }),
    numberOfVisas: z.string().min(1, { message: "number of visas can not be empty." }).refine((value) => /^[0-9]+$/.test(value), {
        message: "Please enter a valid numbers with only numbers.",
    }),
})

export default function ContactFormTwo() {
    const [fetching, setFetching] = useState<boolean>(false)
    const [Submited, setSubmited] = useState<boolean>(false)
    const [formStep, setFormStep] = useState<number>(0)

    const { toast } = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            service: "",
            message: "",
            company: "",
            businessActivity: "",
            premises: "",
            numberOfOwners: "",
            numberOfVisas: "",
        },
    })
    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setFetching(true);
            const response = await axios.post('/api/company', values)
            setFetching(false)
            form.reset();
            setSubmited(true)
            toast({
                title: "Successfull 👍👍",
                description: response.data,
            })
        } catch (error) {
            setFetching(false);
            toast({
                title: "Oops 😔😔",
                description: 'Somthing went wrong',
                variant: "destructive"
            })
        }
    }

    if (Submited) {
        return (
            <div className="space-y-8 w-full bg-white py-10 px-5 border rounded-lg shadow-xl h-full">
                <p className="text-xl font-semibold text-center flex flex-col justify-between items-center gap-6">
                    <span>Form submitted successfully 👍👍</span>
                    Thanks for your interest 🎉🎉
                </p>
            </div>
        )
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full bg-white py-10 border rounded-lg shadow-xl overflow-hidden">
                <div className="flex transition-all duration-300 ease-in-out gap-5 px-5" style={{ transform: `translateX(-${(formStep * 100)}%)` }}>
                    <div className="grow-0 shrink-0 w-full flex justify-between flex-col">
                        <FormField
                            control={form.control}
                            name="businessActivity"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Choose your business activity</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    className={cn(
                                                        "w-full justify-between border border-[#036B6D] text-[#036B6D]",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                    tabIndex={-1}
                                                >
                                                    {field.value
                                                        ? activity.find(
                                                            (language) => language.value === field.value
                                                        )?.label
                                                        : "Select business activity"}
                                                    <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-[200px] md:w-[500px] p-0">
                                            <Command>
                                                <CommandInput placeholder="Search activity..." />
                                                <CommandEmpty>No business activity.</CommandEmpty>
                                                <CommandGroup>
                                                    {activity.map((language) => (
                                                        <CommandItem
                                                            value={language.label}
                                                            key={language.value}
                                                            onSelect={() => {
                                                                form.setValue("businessActivity", language.value)
                                                            }}
                                                            tabIndex={-1}
                                                        >
                                                            <Check
                                                                className={cn(
                                                                    "mr-2 h-4 w-4",
                                                                    language.value === field.value
                                                                        ? "opacity-100"
                                                                        : "opacity-0"
                                                                )}
                                                            />
                                                            {language.label}
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="premises"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>What type of permises would you require</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    className={cn(
                                                        "w-full justify-between border border-[#036B6D] text-[#036B6D]",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                    tabIndex={-1}
                                                >
                                                    {field.value
                                                        ? premises.find(
                                                            (premise) => premise.value === field.value
                                                        )?.label
                                                        : "Select Premises"}
                                                    <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-[200px] md:w-[500px] p-0">
                                            <Command>
                                                <CommandInput placeholder="Search Premises..." />
                                                <CommandEmpty>No Premises.</CommandEmpty>
                                                <CommandGroup>
                                                    {premises.map((premise) => (
                                                        <CommandItem
                                                            value={premise.label}
                                                            key={premise.value}
                                                            onSelect={() => {
                                                                form.setValue("premises", premise.value)
                                                            }}
                                                            tabIndex={-1}
                                                        >
                                                            <Check
                                                                className={cn(
                                                                    "mr-2 h-4 w-4",
                                                                    premise.value === field.value
                                                                        ? "opacity-100"
                                                                        : "opacity-0"
                                                                )}
                                                            />
                                                            {premise.label}
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="numberOfOwners"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Number of Owners (only numbers are allowed*)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Number" {...field} className="border border-[#036B6D] focus-visible:ring-[#036B6D] text-[#036B6D]" tabIndex={-1} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="numberOfVisas"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Number of Visas (only numbers are allowed*)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Number" {...field} className="border border-[#036B6D] focus-visible:ring-[#036B6D] text-[#036B6D]" tabIndex={-1} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div onClick={() => setFormStep(1)} className=' bg-[#036B6D] hover:bg-[#9B999A] hover:text-gray-800 w-full py-2 rounded-md text-center text-white font-semibold cursor-pointer select-none' tabIndex={-1}>
                            Next
                        </div>
                    </div>
                    <div className="grow-0 shrink-0 w-full ml-5">
                        <div className="flex flex-col gap-5">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Name" {...field} className="border border-[#036B6D] focus-visible:ring-[#036B6D] text-[#036B6D]" tabIndex={-1} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Phone no" {...field} value={field.value ?? ''} className="border border-[#036B6D] focus-visible:ring-[#036B6D] text-[#036B6D]" tabIndex={-1} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Email ID" type="email" {...field} className="border border-[#036B6D] focus-visible:ring-[#036B6D] text-[#036B6D]" tabIndex={-1} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="company"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Company Name" {...field} className="border border-[#036B6D] focus-visible:ring-[#036B6D] text-[#036B6D]" tabIndex={-1} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex flex-col gap-5">
                            <FormField
                                control={form.control}
                                name="service"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#036B6D]">
                                            Select any service
                                        </FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="border border-[#036B6D] focus-visible:ring-[#036B6D] text-[#036B6D]" tabIndex={-1}>
                                                    <SelectValue placeholder="Select any service" tabIndex={-1} />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="text-[#036B6D]" tabIndex={-1}>
                                                <SelectItem value="Buisness Setup">Buisness Setup</SelectItem>
                                                <SelectItem value="Buisness Advices">Buisness Advices</SelectItem>
                                                <SelectItem value="Financial Forecast and Projections">Financial Forecast and Projections</SelectItem>
                                                <SelectItem value="Dubai Customs Registration">Dubai Customs Registration</SelectItem>
                                                <SelectItem value="Tax Residency Certificate">Tax Residency Certificate</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea placeholder="Message" {...field} className="border border-[#036B6D] focus-visible:ring-[#036B6D] text-[#036B6D]" tabIndex={-1} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div onClick={() => setFormStep(0)} className='border-2 border-black hover:bg-[#9B999A] hover:text-gray-800 w-full py-2 rounded-md text-center text-black font-semibold cursor-pointer select-none' tabIndex={-1}>
                                previous
                            </div>
                            <Button disabled={fetching} type="submit" className=' bg-[#036B6D] hover:bg-[#9B999A] hover:text-gray-800 w-full' tabIndex={-1}>
                                {fetching && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </Form>
    )
}