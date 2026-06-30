import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "react-hot-toast";

import { memberSchema } from "../../../schemas/memberSchema";
import { createMember, updateMember } from "../../services/memberService";
import { getFlatOptions } from "../../services/flatService";

function AddMemberDrawer({
  open,
  onOpenChange,
  onMemberAdded,
  member,
  isEditMode,
}) {
  const [flats, setFlats] = useState([]);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(memberSchema),

    defaultValues: {
      fullName: "",
      email: "",
      mobile: "",
      gender: "",
      flat: "",
      memberType: "Owner",
      occupation: "",
      status: "Active",
    },
  });

  const loadFlats = async () => {
    try {
      const flats = await getFlatOptions();

      setFlats(flats);
    } catch (error) {
      toast.error("Unable to load flats.");
    }
  };

  useEffect(() => {
    if (open) {
      loadFlats();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    if (isEditMode && member) {
      reset({
        fullName: member.fullName || "",
        email: member.email || "",
        mobile: member.mobile || "",
        gender: member.gender || "",
        flat: member.flat?._id || "",
        memberType: member.memberType || "Owner",
        occupation: member.occupation || "",
        status: member.status || "Active",
      });
    } else {
      reset({
        fullName: "",
        email: "",
        mobile: "",
        gender: "",
        flat: "",
        memberType: "Owner",
        occupation: "",
        status: "Active",
      });
    }
  }, [open, member, isEditMode, reset]);

  const onSubmit = async (data) => {
    try {
      let response;

      if (isEditMode) {
        response = await updateMember(member._id, data);
      } else {
        response = await createMember(data);
      }

      toast.success(response.message);

      reset();

      onOpenChange(false);

      if (onMemberAdded) {
        onMemberAdded();
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          (isEditMode ? "Unable to update member." : "Unable to add member."),
      );
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="sm:max-w-xl overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{isEditMode ? "Edit Member" : "Add Member"}</SheetTitle>

          <SheetDescription>
            {isEditMode ? "Update member details." : "Fill the details below."}
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-8">
          {/* Full Name */}

          <div className="space-y-2">
            <Label>Full Name</Label>

            <Input placeholder="Rahul Patel" {...register("fullName")} />

            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}

          <div className="space-y-2">
            <Label>Email</Label>

            <Input placeholder="rahul@gmail.com" {...register("email")} />

            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Mobile */}

          <div className="space-y-2">
            <Label>Mobile</Label>

            <Input placeholder="9876543210" {...register("mobile")} />

            {errors.mobile && (
              <p className="text-red-500 text-sm">{errors.mobile.message}</p>
            )}
          </div>
          {/* Gender */}

          <div className="space-y-2">
            <Label>Gender</Label>

            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>

                    <SelectItem value="Female">Female</SelectItem>

                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />

            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender.message}</p>
            )}
          </div>

          {/* Flat */}

          <div className="space-y-2">
            <Label>Flat</Label>

            <Controller
              name="flat"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Flat" />
                  </SelectTrigger>

                  <SelectContent>
                    {flats.map((flat) => (
                      <SelectItem key={flat._id} value={flat._id}>
                        {flat.block}-{String(flat.flatNo).padStart(3, "0")}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />

            {errors.flat && (
              <p className="text-red-500 text-sm">{errors.flat.message}</p>
            )}
          </div>

          {/* Member Type */}

          <div className="space-y-2">
            <Label>Member Type</Label>

            <Controller
              name="memberType"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Member Type" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="Owner">Owner</SelectItem>

                    <SelectItem value="Tenant">Tenant</SelectItem>

                    <SelectItem value="Family Member">Family Member</SelectItem>

                    <SelectItem value="Committee Member">
                      Committee Member
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
            />

            {errors.memberType && (
              <p className="text-red-500 text-sm">
                {errors.memberType.message}
              </p>
            )}
          </div>

          {/* Occupation */}

          <div className="space-y-2">
            <Label>Occupation</Label>

            <Input
              placeholder="Software Engineer"
              {...register("occupation")}
            />

            {errors.occupation && (
              <p className="text-red-500 text-sm">
                {errors.occupation.message}
              </p>
            )}
          </div>

          {/* Buttons */}

          <div className="flex justify-end gap-3 pt-5">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                reset();
                onOpenChange(false);
              }}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting
                ? isEditMode
                  ? "Updating..."
                  : "Saving..."
                : isEditMode
                  ? "Update Member"
                  : "Save Member"}
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}

export default AddMemberDrawer;
