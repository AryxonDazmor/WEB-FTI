"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trash2, Plus, Calculator } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Course{
    id: string;
    name: string;
    credits: number;
    grade: string;
}

const gradePoints : {[key : string] : number} = {
    A : 4.0,
    AB: 3.5,
    B: 3.0,
    BC: 2.5,
    C: 2.0,
    D: 1.0,
    E: 0.0,
}

const gradeOptions = Object.keys(gradePoints)

export default function calculatorGrade () {
    const [courses, setCourses] =useState<Course[]>([{id: "1", name: "", credits: 0, grade: ""}])
    const [semesterGPA, setSemesterGPA] = useState<number>(0)
    const [totalCredits, setTotalCredits] = useState<number>(0)

    //ipk
    const [prevGPA, setPrevGPA] = useState<number>(0)
    const [prevCredits, setPrevCredits] = useState<number> (0)
    const [cumulativeGPA, setCumulativeGPA] = useState<number>(0)

    const addCourse = () => {
        const newCourse: Course = {
            id: Date.now().toString(),
            name: "", 
            credits:0,
            grade: "",
        }
        setCourses([...courses, newCourse])
    }

    const updateCourse = (id: string, field: keyof Course, value: string | number) => {
        setCourses(courses.map((course) => (course.id === id ? {...course, [field] : value } : course)))
    }

    const removeCourse = (id : string) => {
        if(courses.length > 1 ){
            setCourses(courses.filter((course) => course.id !== id))
        }
    }

    const calculateGPA = () => {
        let totalPoints = 0;
        let totalCreditHours = 0;

        courses.forEach((course) => {
            if(course.grade && course.credits > 0){
                totalPoints += gradePoints[course.grade] * course.credits;
                totalCreditHours += course.credits
            }
        })

        const gpa = totalCreditHours > 0 ? totalPoints / totalCreditHours : 0;
        setSemesterGPA(gpa)
        setTotalCredits(totalCreditHours)

        if(prevCredits > 0 && prevGPA){
            const totalPrevPoints = prevGPA * prevCredits;
            const totalCurrentPoints = gpa * totalCreditHours;
            const totalAllCredits  =   prevCredits + totalCreditHours;
            const cumulativeGPA = totalAllCredits > 0 ? (totalPrevPoints + totalCurrentPoints) / totalAllCredits : 0;
            setCumulativeGPA(cumulativeGPA);
        }else{
            setCumulativeGPA(gpa)
        }
    }

    useEffect(() => {
        calculateGPA()
    }, [courses, prevGPA, prevCredits])

    const getGPAColor = (gpa: number) => {
        if (gpa >= 3.5) return "text-green-600"
        if (gpa >= 3.0) return "text-blue-600"
        if (gpa >= 2.5) return "text-yellow-600"
        return "text-red-600"
      }
    
    const getGPALabel = (gpa: number) => {
        if (gpa >= 3.5) return "Sangat Baik"
        if (gpa >= 3.0) return "Baik"
        if (gpa >= 2.5) return "Cukup"
        if (gpa >= 2.0) return "Kurang"
        return "Sangat Kurang"
      }



    return (
        <div className="min-h-screen bg-linear-to-t from-sky-400 py-20 mx-auto p-4">
            <div className=" text-center mb-4">
                <h1 className= "font-bold text-5xl ">Kalkulator Indeks</h1>
                <p className="text-muted-foreground">Hitungan hanyalah prediksi dari yang sebenarnya</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Calculator className="h-5 w-5"/>
                                Input Mata Kuliah 
                        </CardTitle>
                        <CardDescription>Masukan nama mata kuliah, SKS, dan nilai yang diperoleh</CardDescription>
                    </CardHeader>

                    <CardContent>
                        <div className="space-y-4">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Mata Kuliah</TableHead>
                                        <TableHead className="w-20">SKS</TableHead>
                                        <TableHead className="w-24">Nilai</TableHead>
                                        <TableHead className="w-12"></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {courses.map((course) => (
                                        <TableRow
                                        key={course.id}>
                                            <TableCell>
                                                <Input
                                                placeholder="Nama mata kuliah"
                                                value={course.name}
                                                onChange={(e) => updateCourse(course.id, "name", e.target.value)}/>
                                            </TableCell>
                                            <TableCell>
                                                    <Input
                                                    type="number"
                                                    min="1"
                                                    max="6"
                                                    value={course.credits}
                                                    onChange={(e) => updateCourse(course.id, "credits", Number.parseInt(e.target.value) || 0)}/>
                                            </TableCell>
                                            <TableCell>
                                                <Select
                                                value={course.grade}
                                                onValueChange={(value) => updateCourse(course.id, "grade", value)}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="pilih"/>
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {gradeOptions.map((grade) => (
                                                            <SelectItem
                                                            key={grade}
                                                            value={grade}>
                                                                {grade} ({gradePoints[grade]})
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </TableCell>
                                            <TableCell>
                                                <Button 
                                                variant={"ghost"}
                                                size={"sm"}
                                                onClick={() => removeCourse(course.id)}
                                                disabled= {courses.length === 1}>
                                                    <Trash2 className="w-2 h-2"/>
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ) )}
                                </TableBody>
                            </Table>
                            <Button className="w-full bg-transparent " onClick={addCourse} variant={"outline"}>
                                <Plus className="h-4 w-4 mr-2"/>
                            </Button>
                        </div>
                                {/*Hasil Perhitungan */}
                    </CardContent>
                </Card>

                        <div className="space-y-6 ">
                            <Card>
                                <CardHeader>

                                    <CardTitle>
                                        IPK Kumulatif &#40; Opsional &#41;
                                    </CardTitle>
                                    <CardDescription>
                                        Masukan IPK dan total SKS sebelumnya untuk menghitung IPK kumulatif
                                    </CardDescription>

                                </CardHeader>

                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="prev-gpa" className="mb-2">IPK Sebelumnya</Label>
                                            <Input
                                            id="prev-gpa"
                                            type="number"
                                            placeholder="0.00"
                                            step="0.01"
                                            min="0"
                                            max="4"
                                            value={prevGPA || ""}
                                            onChange={(e) => setPrevGPA(Number.parseFloat(e.target.value)|| 0)}/>
                                        </div>
                                        <div>
                                            <Label htmlFor="prev-sks" className="mb-2 text-nowrap">Total SKS Sebelumnya</Label>
                                            <Input
                                            id="prev-sks"
                                            type="number"
                                            placeholder="0"
                                            min="0"
                                            value={prevCredits || ""}
                                            onChange={(e) => setPrevCredits(Number.parseFloat(e.target.value)|| 0)}/>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Hasil Perhitungan</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-4">
                                        <div className="grid gap-4">
                                            <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                                                <div>
                                                    <p>IP Semester ini</p>
                                                    <p className= {`text-2xl font-semibold ${getGPAColor(semesterGPA)} `}>{semesterGPA.toFixed(2)}</p>
                                                    <Badge variant={"outline"} className="mt-1">{getGPALabel(semesterGPA)}</Badge>
                                                </div>

                                                <div>
                                                    <p>Total SKS</p>
                                                    <p>{totalCredits}</p>
                                                </div>
                                            </div>

                                            {prevCredits > 0 && prevGPA > 0 && (
                                                <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg">
                                                <div>
                                                    <p>IP Kumulatif</p>
                                                    <p className= {`text-2xl font-semibold ${getGPAColor(cumulativeGPA)} `}>{cumulativeGPA.toFixed(2)}</p>
                                                    <Badge variant={"outline"} className="mt-1">{getGPALabel(cumulativeGPA)}</Badge>
                                                </div>

                                                <div>
                                                    <p>Total SKS</p>
                                                    <p>{totalCredits + prevCredits}</p>
                                                </div>
                                            </div>
                                            )}
                                        </div>

                                        <div className="mt-6">
                                            <h4 className="mb-2 font-semibold">Skala Penilaian</h4> 
                                            <div className="grid grid-cols-2 gap-2 text-sm">
                                                {Object.entries(gradePoints).map(([grade, points]) => (
                                                    <div
                                                    key={grade} className="flex justify-between p-2 bg-muted rounded-lg">
                                                        <span>{grade}</span>
                                                        <span>{points.toFixed(1)}</span>
                                                    </div>
                                                ))}
                                            </div>   
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
            </div>
        </div>
    )
}