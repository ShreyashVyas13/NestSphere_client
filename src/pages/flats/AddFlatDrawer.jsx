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
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { flatSchema } from "../../../schemas/flatSchema";
import { createFlat } from "../../services/flatService";

import {
  BLOCKS,
  BHK_TYPES,
  FLAT_STATUS,
} from "../../constants/flatConstants";

import { toast } from "react-hot-toast";

function AddFlatDrawer({
  open,
  onOpenChange,
  onFlatAdded,
}) {
  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(flatSchema),
    defaultValues: {
      block: "",
      flatNumber: "",
      floor: "",
      bhkType: "",
      area: "",
      status: "Vacant",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await createFlat(data);

      toast.success(response.message);

      reset();

      onOpenChange(false);

      if (onFlatAdded) {
        onFlatAdded();
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to create flat."
      );
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Add New Flat</SheetTitle>

          <SheetDescription>
            Fill the details below to add a new flat.
          </SheetDescription>
        </SheetHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 mt-8"
        >
          {/* Block */}

          <div className="space-y-2">
            <Label>Block</Label>

            <Controller
              name="block"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Block" />
                  </SelectTrigger>

                  <SelectContent>
                    {BLOCKS.map((block) => (
                      <SelectItem
                        key={block}
                        value={block}
                      >
                        {block}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />

            {errors.block && (
              <p className="text-sm text-red-500">
                {errors.block.message}
              </p>
            )}
          </div>

          {/* Flat Number */}

          <div className="space-y-2">
            <Label>Flat Number</Label>

            <div className="flex">

  <div className="w-20 border rounded-l-md bg-gray-100 flex items-center justify-center font-semibold">

    {watch("block") || "-"}

  </div>

  <Input
    type="number"
    min="1"
    max="999"
    className="rounded-l-none"
    placeholder="101"
    {...register("flatNo")}
  />

</div>

            {errors.flatNo && (
              <p className="text-sm text-red-500">
                {errors.flatNo.message}
              </p>
            )}
          </div>

          {/* Floor */}

          <div className="space-y-2">
            <Label>Floor</Label>

            <Input
              type="number"
              placeholder="1"
              {...register("floor")}
            />

            {errors.floor && (
              <p className="text-sm text-red-500">
                {errors.floor.message}
              </p>
            )}
          </div>

          {/* BHK */}

          <div className="space-y-2">
            <Label>BHK Type</Label>

            <Controller
              name="bhkType"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select BHK Type" />
                  </SelectTrigger>

                  <SelectContent>
                    {BHK_TYPES.map((bhk) => (
                      <SelectItem
                        key={bhk}
                        value={bhk}
                      >
                        {bhk}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />

            {errors.bhkType && (
              <p className="text-sm text-red-500">
                {errors.bhkType.message}
              </p>
            )}
          </div>

          {/* Area */}

          <div className="space-y-2">
            <Label>Area (sq.ft.)</Label>

            <Input
              type="number"
              placeholder="950"
              {...register("area")}
            />

            {errors.area && (
              <p className="text-sm text-red-500">
                {errors.area.message}
              </p>
            )}
          </div>

          {/* Status */}

          <div className="space-y-2">
            <Label>Status</Label>

            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Status" />
                  </SelectTrigger>

                  <SelectContent>
                    {FLAT_STATUS.map((status) => (
                      <SelectItem
                        key={status}
                        value={status}
                      >
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />

            {errors.status && (
              <p className="text-sm text-red-500">
                {errors.status.message}
              </p>
            )}
          </div>

          {/* Buttons */}

          <div className="flex justify-end gap-3 pt-6">
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

            <Button
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Saving..."
                : "Save Flat"}
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}

export default AddFlatDrawer;